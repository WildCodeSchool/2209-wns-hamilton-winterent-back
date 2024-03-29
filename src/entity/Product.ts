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
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  range: string; //todo enum

  @Column({ nullable: true })
  image: string;

  @OneToMany(() => Booking, (booking) => booking.product)
  // @OneToMany(() => Booking, (booking) => booking.product, {eager: true})
  bookings: Booking[];

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @OneToMany(() => ProductToShop, (productToShop) => productToShop.product)
  productToShops: ProductToShop[];
}
