import ShopService from "../services/shop.service";
import { MutationAddShopArgs, QueryShopArgs, ShopInput } from "../generated/graphql";

export default {
    Query: {

        shops: async (_: any, args: any) => {

            return await new ShopService().findAll();
        },

        shop: async (_: any, args: QueryShopArgs) => {
            const { id } = args;
            return await new ShopService().findShop(+id);
        }
    },
    Mutation: {
        addShop: async (_: any, { shop }: MutationAddShopArgs) => {
            try {
                let data = await new ShopService().createShop(shop);
                return data;
            } catch (error) {
                console.log(error);
                throw new Error("erreur");
            }
        },
    }
}