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
    console.log("Fetching with undefined...");
    await client.fetch(`*[_type == "page" && _id == $id] {}`, { id });
    console.log("Success with undefined");
  } catch (e) {
    console.error("Error with undefined:", e.message);
  }

  try {
    const id = "123";
    console.log("Fetching with string...");
    await client.fetch(`*[_type == "page" && _id == $id] {}`, { id });
    console.log("Success with string");
  } catch (e) {
    console.error("Error with string:", e.message);
  }
}
run();
