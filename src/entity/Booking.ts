import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export default class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

//   @Column()
//   product_id: Number;

//   @Column()
//   order_id: Number

}