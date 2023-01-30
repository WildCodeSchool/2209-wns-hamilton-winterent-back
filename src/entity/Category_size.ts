import { Column, Entity, PrimaryColumn, OneToMany, ManyToOne } from "typeorm";
import Category from "./Category";
import QuantityToSize from "./quantity_size";

@Entity()
export default class CategorySize {
  @PrimaryColumn()
  id: number;

  @Column()
  size: string;

  @Column()
  label: string;

  @OneToMany(
    () => QuantityToSize,
    (quantityToSize) => quantityToSize.categorySize
  )
  quantityToSizes: QuantityToSize[];

  @ManyToOne(() => Category, (category) => category.categorySizes)
  category: Category;
}
