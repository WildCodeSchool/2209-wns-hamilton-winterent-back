import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolver";
import productResolver from "./product.resolver";
import { resolvers as scalarResolvers } from "graphql-scalars";
import categoryResolver from "./category.resolver";
import shopResolver from "./shop.resolver";
import orderResolver from "./order.resolver";

const resolvers = [
  userResolver,
  productResolver,
  scalarResolvers,
  categoryResolver,
  shopResolver,
  orderResolver,
];

export default mergeResolvers(resolvers);
