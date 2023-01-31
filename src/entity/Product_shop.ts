import { Column, Entity, PrimaryColumn, OneToMany, ManyToOne } from "typeorm";
import Product from "./Product";
import QuantityToSize from "./quantity_size";
import Shop from "./Shop";

@Entity()
export default class ProductToShop {
  @PrimaryColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  priceHT: number;

  @OneToMany(
    () => QuantityToSize,
    (quantityToSize) => quantityToSize.productToShop
  )
  quantityToSizes: QuantityToSize[];

  @ManyToOne(() => Product, (product) => product.productToShops)
  product: Product;

  @ManyToOne(() => Shop, (shop) => shop.productToShops)
  shop: Shop;
}
