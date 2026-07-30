import fs from 'fs';
import path from 'path';

// We want to mock @sanity/client
const sanityMockCode = `
export function createClient(config) {
  return {
    fetch: async (query, params) => {
      console.log("[Mock Sanity] fetch:", query, params);
      if (query.includes('siteConfig')) {
        return {
          titleSuffix: ' - Mock',
          header: { title: 'Mock Header', navLinks: [] },
          footer: { text: 'Mock Footer' }
        };
      }
      if (query.includes('[_type == "page"]')) {
        return [
          { _id: 'page-1', slug: { current: '/' }, title: 'Home', sections: [] }
        ];
      }
      if (query.includes('[_type == "page" && _id == $id]')) {
        return [
          { _id: params.id, slug: { current: '/' }, title: 'Home', sections: [] }
        ];
      }
      return [];
    },
    listen: () => ({
      subscribe: () => ({})
    })
  };
}
`;

fs.writeFileSync(
  path.join(process.cwd(), 'node_modules', '@sanity', 'client', 'dist', 'index.js'),
  sanityMockCode
);
console.log("Mocked sanity client.");
