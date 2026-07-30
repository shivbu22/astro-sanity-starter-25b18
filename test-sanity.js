import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '123',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-31',
});

async function run() {
  try {
    await client.fetch(`*[_type == "page" && _id == $id] {}`, { id: undefined });
    console.log("Success with undefined");
  } catch (e) {
    console.error("Error with undefined:", e.message);
  }
}
run();
