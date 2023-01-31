import datasource from '../lib/datasource';
import User from '../entity/User';
import bcrypt from 'bcrypt';
import {
  ICreateUser,
  ILoginUserInput,
  IUser,
} from '../resolver/user.resolver.spec';
import { generateToken } from '../lib/utilities';
import { MutationAddUserArgs, UserInfos } from '../generated/graphql';

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

  async createUser({ firstname, lastname, email, password, gender, birthdate, phoneNumber, role }: MutationAddUserArgs) : Promise<UserInfos>{
    let hash = await bcrypt.hash(password, SALT_ROUND);
    let token = generateToken({ email });
    let user = await this.repository.save({ firstname, lastname, email, password: hash, gender, birthdate, phoneNumber, role });

    let result : UserInfos = {
      user : {id : user.id.toString(), email: user.email, firstname: user.firstname},
      token: token
    }

    return result;
  }
}

export default UserService;
