import {
  MutationAddProductArgs,
  QueryProductArgs,
  MutationUpdateProductArgs
} from '../generated/graphql';
import ProductService from "../services/product.service";


export default {
  Query: {
    products: async (_: any, args: any) => {
      return await new ProductService().findAll();
    },

    product: async (_: any, args: QueryProductArgs) => {
      const { id } = args;
      return await new ProductService().findProductById(+id);
    },


  },
  Mutation: {
    addProduct: async (_: any, args: MutationAddProductArgs) => {
      const { description, image, name, range } = args;
      try {
        let data = await new ProductService().createProduct({
          description,
          image,
          name,
          range,
        });
        return data;
      } catch (error) {
        console.log(error);
        throw new Error('erreur');
      }
    },
    updateProduct: async (_: any, args: MutationUpdateProductArgs) => {
      const { id, description, image, name, range } = args;
      try {
        let data = await new ProductService().updateProductById({
          id,
          description,
          image,
          name,
          range,
        });
        return data;
      } catch (error) {
        console.log(error);
        throw new Error('erreur');
      }
    },
    deleteProduct: async (_: any, args: any) => {
      const { id } = args;
      try {
        await new ProductService().deleteProduct(id);
      } catch (error) {
        console.log(error);
        throw new Error('erreur');
      }
    },
  },
};