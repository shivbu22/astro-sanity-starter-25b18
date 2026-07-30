import { createClient } from '@sanity/client';
const client = createClient({
  projectId: 'q83v15p7',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-31',
});

try {
  client.fetch(`*[_type == "page" && _id == $id] {}`, { id: "123" });
  console.log("No throw on valid string id");
} catch(e) {
  console.log("Threw on string id:", e.message);
}
