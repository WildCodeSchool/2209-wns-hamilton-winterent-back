import { DataSource } from "typeorm";

import User from "../entity/User";

export default new DataSource({
  type: 'postgres',
  // host: 'host.docker.internal',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'winterent',
  synchronize: true,
  entities: [User],
  logging: ['query', 'error'],
});
  