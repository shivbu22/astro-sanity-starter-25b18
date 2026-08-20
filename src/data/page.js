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
    } catch (e) {
        if (e.message?.includes('not found') || e.statusCode === 404) {
            console.warn('Sanity credentials dummy or invalid, returning empty array to avoid breaking build');
            return [];
        }
        throw e;
    }
}

export async function getPageById(id) {
    return await client.fetch(`*[_type == "page" && _id == "${id}"] ${PAGE_QUERY_OBJ}`);
}
