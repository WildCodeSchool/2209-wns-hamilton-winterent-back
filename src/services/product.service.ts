import datasource from "../lib/datasource";
import Product from "../entity/Product";
import {
  MutationAddProductArgs,
  MutationUpdateProductArgs,
} from "../generated/graphql";

class ProductService {
  repository;
  constructor() {
    this.repository = datasource.getRepository(Product);
  }

  // async findFilterProducts(idCategory: string, idShop: string): Promise<Product[]> {
  //   return await this.repository.find({
  //     where: [{category: {id: idCategory}}, { productToShops: { shop: { id: idShop } } }],
  //   });
  // }

  async findFilterProducts(
    idCategory: string,
    idShop: string
  ): Promise<Product[]> {
    return await this.repository
      .createQueryBuilder("product")
      .leftJoinAndSelect("product.category", "category")
      .leftJoin("product.productToShops", "productToShops")
      .leftJoin("productToShops.shop", "shop")
      .where("category.id = :idCategory", { idCategory })
      .andWhere("shop.id = :idShop", { idShop })
      .getMany();
  }

  async createProduct({
    description,
    image,
    name,
    range,
  }: MutationAddProductArgs): Promise<Product> {
    let product = await this.repository.save({
      description,
      image,
      name,
      range,
    });

    return product;
  }

  async findProductById(id: string) {
    return await this.repository.findOneBy({ id });
  }

  async updateProductById({
    id,
    description,
    image,
    name,
    range,
  }: MutationUpdateProductArgs): Promise<void> {
    try {
      const newProduct = this.findProductById(id);
      if (!newProduct) {
        throw new Error(" le produit n'existe pas");
      }
      await this.repository.update(id, {
        description,
        image,
        name,
        range,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async deleteProduct(id: string) {
    try {
      const newProduct = this.findProductById(id);
      if (!newProduct) {
        throw new Error(" le produit n'existe pas");
      }
      await this.repository.delete(id);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async findAll(): Promise<Product[]> {
    let test = await this.repository.find();

    return test;
  }
}

export default ProductService;
