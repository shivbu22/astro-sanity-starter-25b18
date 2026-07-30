import { getPageById } from './src/data/page.js';
import { client } from './src/utils/sanity-client.js';

client.fetch = async (query, params) => {
  console.log("Mock fetched!");
  console.log("Query:", query);
  console.log("Params:", params);
  return [];
};

async function run() {
  await getPageById("12345");
}
run();
