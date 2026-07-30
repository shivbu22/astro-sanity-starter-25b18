import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '12345678',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-31',
});

// override fetch
client.fetch = async function(query, params) {
    console.log("Query:", query, "Params:", params);
}

await client.fetch(`*[_type == "page" && _id == $id] {}`, { id: undefined });
