import { Column, Entity, PrimaryColumn, ManyToOne } from "typeorm";
import CategorySize from "./Category_size";
import ProductToShop from "./Product_shop";

@Entity()
export default class QuantityToSize {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  quantity: number;

  @ManyToOne(
    () => ProductToShop,
    (productToShop) => productToShop.quantityToSizes
  )
  productToShop: ProductToShop;
  @ManyToOne(() => CategorySize, (categorySize) => categorySize.quantityToSizes)
  categorySize: CategorySize;
}
