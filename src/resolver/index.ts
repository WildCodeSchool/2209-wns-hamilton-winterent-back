import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolver";
import productResolver from "./product.resolver";
import { resolvers as scalarResolvers } from "graphql-scalars";
import shopResolver from "./shop.resolver";


const resolvers = [userResolver, productResolver, shopResolver, scalarResolvers];

export default mergeResolvers(resolvers);
