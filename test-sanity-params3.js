const { createClient } = require('@sanity/client');
const client = createClient({
  projectId: 'test1234',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-31'
});

try {
  client.fetch('*[_type == "page" && _id == $id]', { id: null }).catch(e => console.log("Fetch error:", e.message));
} catch (e) {
  console.log("Sync error:", e.message);
}
