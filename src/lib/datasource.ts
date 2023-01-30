import { DataSource } from "typeorm";
import Address from "../entity/Address";
import Booking from "../entity/Booking";
import Category from "../entity/Category";
import CategorySize from "../entity/Category_size";
import Order from "../entity/Order";
import Product from "../entity/Product";
import ProductToShop from "../entity/Product_shop";
import QuantityToSize from "../entity/quantity_size";
import Role from "../entity/Role";
import Shop from "../entity/Shop";

import User from "../entity/User";

export default new DataSource({
  type: "postgres",
  // host: 'host.docker.internal',
  host: "db",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "winterent",
  synchronize: true,
  entities: [
    //__dirname + "src/entity/*.ts",
    User,
    Role,
    Order,
    Address,
    Booking,
    Product,
    Category,
    CategorySize,
    ProductToShop,
    QuantityToSize,
    Shop,
  ],
  // logging: ['query', 'error'],
});
