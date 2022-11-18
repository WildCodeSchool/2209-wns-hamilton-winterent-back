import datasource from '../lib/datasource';
import User from '../entity/User';
import bcrypt from 'bcrypt';
import {
  ICreateUser,
  ILoginUserInput,
  IUser,
} from '../resolver/user.resolver.spec';
import { generateToken } from '../lib/utilities';

const SALT_ROUND = 10;

class UserService {
  repository;
  constructor() {
    this.repository = datasource.getRepository(User);
  }

  async findUser(id: number) {
    return await this.repository.findOneBy({ id });
  }
  async findUserByEmail(email: string) {
    return await this.repository.findOneBy({ email });
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async createUser({ firstname, lastname, email, password }: ICreateUser) {
    let hash = await bcrypt.hash(password, SALT_ROUND);
    let token = generateToken({ email });
    let user = await this.repository.save({ firstname, lastname, email, password: hash });
    return {user, token};
  }
}

export default UserService;
