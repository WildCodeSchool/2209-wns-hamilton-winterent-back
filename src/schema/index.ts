import { loadFilesSync } from "@graphql-tools/load-files";
import { typeDefs as scalarTypeDefs } from "graphql-scalars";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typeDefs = loadFilesSync(".", {
  extensions: ["schema.graphql"],
  recursive: true,
});

export default mergeTypeDefs([...scalarTypeDefs, ...typeDefs]);
