import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import CategorySize from "./Category_size";
import Product from "./Product";

@Entity()
export default class Category {
  @PrimaryColumn()
  id: number;

  @Column()
  category: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];

  @OneToMany(() => CategorySize, (categorySize) => categorySize.category)
  categorySizes: CategorySize[];
}
