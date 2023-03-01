import Category from '../entity/Category';
import Product from '../entity/Product';
import datasource from '../lib/datasource';

class CategoryService {
  repositoryProduct;
  repository;
  constructor() {
    this.repository = datasource.getRepository(Category);
    this.repositoryProduct = datasource.getRepository(Product);
  }

  async findAllCategory() {
    return await this.repository.find();
  }

  async findIdByCategory(id: number) {
    return await this.repository.findOneBy({ id });
  }

  async findProductsByCategory(id: number) {
    return await this.repositoryProduct.findBy({ category: { id } });
    // let products = await this.repositoryProduct.findBy({ category: { id } });
    // return { products };
  }
}

export default CategoryService;
