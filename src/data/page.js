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
    // SECURITY: Use parameterized query to prevent GROQ injection
    // Sanity client errors if passing `undefined` as a parameter, so we fallback to `null`.
    return await client.fetch(`*[_type == "page" && _id == $id] ${PAGE_QUERY_OBJ}`, { id: id ?? null });
}
