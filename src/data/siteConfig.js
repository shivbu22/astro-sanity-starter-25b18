import { client } from '@utils/sanity-client';
import { IMAGE } from './blocks';

const CONFIG_QUERY_OBJ = `{
  _id,
  "favicon": {
    "src": favicon.asset->url
  },
  header {
    ...,
    logo ${IMAGE}
  },
  footer,
  titleSuffix
}`;

export async function fetchData() {
    try {
        return await client.fetch(`*[_type == "siteConfig"][0] ${CONFIG_QUERY_OBJ}`);
    } catch (e) {
        if (e.message?.includes('not found') || e.statusCode === 404) {
            console.warn('Sanity credentials dummy or invalid for siteConfig, returning null to avoid breaking build');
            return null;
        }
        throw e;
    }
}
