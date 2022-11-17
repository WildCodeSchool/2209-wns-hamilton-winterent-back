import datasource from '../lib/datasource';
import User from '../entity/User';
import bcrypt from 'bcrypt';
import {
  ICreateUser,
  ILoginUserInput,
  IUser,
} from '../resolver/user.resolver.spec';

const myPlaintextPassword = 's0//P4$$w0rD';

const SALT_ROUND = 10;

class UserService {
  repository;
  constructor() {
    this.repository = datasource.getRepository(User);
  }

  async findUser(id: number) {
    return await this.repository.findOneBy( {id}) ;
  }

  async findAll(): Promise<User[]> {
   return await this.repository.find()
  }

  async createUser({ firstname, lastname, email, password }: ICreateUser) {
    let hash = await bcrypt.hash(password, SALT_ROUND);

    const newUser = new User();
    newUser.firstname = firstname;
    newUser.lastname = lastname;
    newUser.email = email;
    newUser.password = hash;

    // Token à générer

    await this.repository.save(newUser);

    return newUser;
  }


}

export default UserService;
