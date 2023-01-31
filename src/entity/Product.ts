import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import Booking from "./Booking";
import Category from "./Category";
import ProductToShop from "./Product_shop";

@Entity()
export default class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  range: string; //todo enum

  @Column()
  image: string;

  @OneToMany(() => Booking, (booking) => booking.product)
  bookings: Booking[];

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @OneToMany(() => ProductToShop, (productToShop) => productToShop.product)
  productToShops: ProductToShop[];
}
