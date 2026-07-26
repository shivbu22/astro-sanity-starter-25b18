import { createClient } from '@sanity/client';
const client = createClient({
  projectId: 'vnkupgyb',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
});

async function run() {
  try {
    const id = null;
    console.log("Fetching with null...");
    await client.fetch(`*[_type == "page" && _id == $id] {}`, { id });
    console.log("Success with null");
  } catch (e) {
    console.error("Error with null:", e.message);
  }
}
run();
