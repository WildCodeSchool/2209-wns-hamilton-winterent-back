import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolver";
import productResolver from "./product.resolver";
import { resolvers as scalarResolvers } from "graphql-scalars";
import categoryResolver from "./category.resolver";
import shopResolver from "./shop.resolver";

const resolvers = [
  userResolver,
  productResolver,
  scalarResolvers,
  categoryResolver,
  shopResolver,
];

export default mergeResolvers(resolvers);
