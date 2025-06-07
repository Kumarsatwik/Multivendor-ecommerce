import configPromise from "@payload-config";
import { getPayload } from "payload";
// Import your collection slugs from your payload config or types
import collections from "@payload-config"; // Adjust this import based on your actual config

export default async function Home() {
  return <div>{JSON.stringify("test", null, 2)}</div>;
}
