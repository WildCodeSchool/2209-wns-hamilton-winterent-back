import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  @Unique(["email"])
  email: string;

  @Column()
  password: string;
}
