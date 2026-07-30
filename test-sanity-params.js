import { createClient } from '@sanity/client';
const client = createClient({
  projectId: 'q83v15p7',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-31',
});

// We can intercept the request using nock or just checking validation
try {
  client.fetch(`*[_type == "page" && _id == $id] {}`, { id: undefined });
  console.log("No throw on undefined");
} catch(e) {
  console.log("Threw on undefined:", e.message);
}
