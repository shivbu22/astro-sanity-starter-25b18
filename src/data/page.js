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
    try {
        return await client.fetch(`*[_type == "page"] ${PAGE_QUERY_OBJ}`);
    } catch (err) {
        console.error('Sanity fetch error (page data):', err);
        return [];
    }
}

export async function getPageById(id) {
    if (!id) return [];
    try {
        return await client.fetch(`*[_type == "page" && _id == $id] ${PAGE_QUERY_OBJ}`, { id });
    } catch (err) {
        console.error('Sanity fetch error (page by id):', err);
        return [];
    }
}
