import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Address from "./Address";
import ProductToShop from "./Product_shop";

@Entity()
export default class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Address,{ eager: true } )
  @JoinColumn()
  address: Address;

  @OneToMany(() => ProductToShop, (productToShop) => productToShop.shop)
  productToShops: ProductToShop[];
}
