import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphql-pokemon2.vercel.app",
  generates: {
    "./src/@types/types.d.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
