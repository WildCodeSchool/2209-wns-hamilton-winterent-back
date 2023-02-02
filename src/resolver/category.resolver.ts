import CategoryService from '../services/category.service';

export default {
  Query: {
    category: async (_: any, args: any) => {
      const { id } = args;
      return await new CategoryService().findIdByCategory(+id);
    },
    catProducts: async (_: any, args: any) => {
      const { id } = args;
      return await new CategoryService().findProductsByCategory(+id);
    },
  },
};
