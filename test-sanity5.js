import { createClient } from '@sanity/client';
const client = createClient({
  projectId: '12345678',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-31',
});

try {
  client.fetch(`*[_type == "page" && _id == $id] {}`, { id: undefined });
} catch(e) {
  console.log("Error type:", e.name, "message:", e.message);
}
