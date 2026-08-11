import { client } from '@utils/sanity-client';
import { SECTIONS } from './blocks';

const PAGE_QUERY_OBJ = `{
  _id,
  slug,
  title,
  metaTitle,
  metaDescription,
  "socialImage": {
    "src": socialImage.asset->url
  },
  sections[] ${SECTIONS}
}`;

export async function fetchData() {
    return await client.fetch(`*[_type == "page"] ${PAGE_QUERY_OBJ}`);
}

export async function getPageById(id) {
    // 🛡️ Security Fix: Handle falsy parameters and use parameterized GROQ queries
    // to prevent injection vulnerabilities.
    if (!id) return [];
    return await client.fetch(`*[_type == "page" && _id == $id] ${PAGE_QUERY_OBJ}`, { id });
}
