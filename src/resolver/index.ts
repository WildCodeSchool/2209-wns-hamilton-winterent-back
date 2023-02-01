import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolver";
import productResolver from "./product.resolver";
import { resolvers as scalarResolvers } from "graphql-scalars";

const resolvers = [userResolver, productResolver, scalarResolvers];

export default mergeResolvers(resolvers);
