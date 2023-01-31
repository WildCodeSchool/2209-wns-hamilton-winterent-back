import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity()
export default class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: RoleType;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}

export enum RoleType {
  SUPERADMIN = "Admin",
  ADMIN = "Gerant",
  USER = "User",
}
