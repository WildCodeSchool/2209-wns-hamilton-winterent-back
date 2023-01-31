import datasource from '../lib/datasource';
import Product from '../entity/Product';
import { ProductResolvers } from '../generated/graphql';


class ProductService {
  repository;
  constructor() {
    this.repository = datasource.getRepository(Product);
  }

  async createProduct({ description, image, name, range }: ProductResolvers) {
    let product = await this.repository.save({ description, image, name, range });
    return {product};
  }
}

export default ProductService;