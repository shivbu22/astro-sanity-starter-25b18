import { createClient } from '@sanity/client';
const client = createClient({
  projectId: 'vnkupgyb',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
});

async function run() {
  try {
    const id = undefined;
    console.log("Fetching with empty string...");
    await client.fetch(`*[_type == "page" && _id == $id] {}`, { id: id || "" });
    console.log("Success with empty string");
  } catch (e) {
    console.error("Error with empty string:", e.message);
  }
}
run();
