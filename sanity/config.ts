import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Fankar Studio",
  projectId: "19ckgpxl",
  dataset: "development",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
