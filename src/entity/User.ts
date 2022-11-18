import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column({nullable: true})
  lastname: string;

  @Column()
  @Unique(["email"])
  email: string;

  @Column()
  password: string;
}
