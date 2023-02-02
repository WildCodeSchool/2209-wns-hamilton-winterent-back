import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolver";
import productResolver from "./product.resolver";
import { resolvers as scalarResolvers } from "graphql-scalars";
import categoryResolver from "./category.resolver";

const resolvers = [userResolver, productResolver, scalarResolvers, categoryResolver];

export default mergeResolvers(resolvers);
