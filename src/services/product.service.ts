import datasource from '../lib/datasource';
import Product from '../entity/Product';
import {
  MutationAddProductArgs,
  MutationUpdateProductArgs,
  ProductAdmin,
  ProductInfos,
} from '../generated/graphql';
import ProductToShop from '../entity/Product_shop';

class ProductService {
  repository;
  productShopRepository;
  constructor() {
    this.repository = datasource.getRepository(Product);
    this.productShopRepository = datasource.getRepository(ProductToShop);
  }

  async findFilterProducts(
    idCategory: string,
    idShop: string
  ): Promise<Product[]> {
    return await this.repository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .leftJoin('product.productToShops', 'productToShops')
      .leftJoin('productToShops.shop', 'shop')
      .where('category.id = :idCategory', { idCategory })
      .andWhere('shop.id = :idShop', { idShop })
      .getMany();
  }

  async findFilterProductsAdmin(
    idCategory: string,
    idShop: string
  ): Promise<ProductAdmin[]> {
    const res = [];
    let data = await this.repository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .leftJoin('product.productToShops', 'productToShops')
      .leftJoin('productToShops.shop', 'shop')
      .where('category.id = :idCategory', { idCategory })
      .andWhere('shop.id = :idShop', { idShop })
      .getMany();

    if (data) {
      for (let i = 0; i < data.length; i++) {
        const response = await this.productShopRepository
          .createQueryBuilder('productToShops')
          .where('productToShops.productId = :productId', {
            productId: data[i].id,
          })
          .andWhere('productToShops.shopId = :shopId', { shopId: idShop })
          .leftJoinAndSelect('productToShops.product', 'product')
          .getOne();

        const productData = {
          priceHT: response?.priceHT,
          quantity: response?.quantity,
          name: data[i].name,
          description: data[i].description,
          range: data[i].range,
          image: data[i].image,
          id: data[i].id,
          category: data[i].category,
        };
        res.push(productData);
      }
    }
    return res;
  }

  async findProductPriceById(productId: string, shopId: string) {
    //let produit = await this.findProductById(id)
    let productInfos: ProductInfos = {};
    const data = await this.productShopRepository
      .createQueryBuilder('productToShops')
      .where('productToShops.productId = :productId', { productId })
      .andWhere('productToShops.shopId = :shopId', { shopId })
      .leftJoinAndSelect('productToShops.product', 'product')
      .getOne();

    if (data != null) {
      productInfos = {
        productId: data.product.id,
        price: data.priceHT,
        quantity: data.quantity,
      };
    }

    return productInfos;
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
