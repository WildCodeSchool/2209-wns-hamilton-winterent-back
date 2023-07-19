import datasource from "../lib/datasource";
import User from "../entity/User";
import Role from "../entity/Role";
import bcrypt from "bcrypt";
import { generateToken } from "../lib/utilities";
import {
  MutationAddUserAddressArgs,
  MutationAddUserArgs,
  MutationUpdateUserArgs,
  UserInfos,
} from "../generated/graphql";
import { Repository } from "typeorm";
import Address from "../entity/Address";
import AddressService from "./address.service";

const SALT_ROUND = 10;

class UserService {
  userRepository: Repository<User>;
  addressRepository: Repository<Address>;
  roleRepository: Repository<Role>;
  addressService: AddressService;
  constructor() {
    this.userRepository = datasource.getRepository(User);
    this.addressRepository = datasource.getRepository(Address);
    this.roleRepository = datasource.getRepository(Role);
    this.addressService = new AddressService();
  }

  async findUser(id: string) {
    return await this.userRepository.findOneBy({ id });
  }
  async findUserByEmail(email: string) {
    console.log("test");
    return await this.userRepository.findOneBy({ email });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createRole(args: any): Promise<void> {
    const { role } = args;
    console.log(role.role);
    await this.roleRepository.save({
      role: role.role,
    });
  }

  async createUser(args: MutationAddUserArgs): Promise<UserInfos> {
    let {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      gender,
      role,
      birthdate,
      phoneNumber,
    } = args.user;
    if (password != confirmPassword) {
      throw new Error("Les mots de passes ne sont pas identiques");
    } else {
      let roleEntity = await this.roleRepository.findOneBy({ role });
      if (!roleEntity) {
        throw new Error("Le role n'existe pas");
      }

      let hash = await bcrypt.hash(password, SALT_ROUND);
      let token = generateToken({ email, role: roleEntity.role });

      let user = await this.userRepository.save({
        firstname,
        lastname,
        email,
        password: hash,
        gender,
        birthdate,
        phoneNumber,
        role: roleEntity,
      });

      let result: UserInfos = {
        user: {
          id: user.id,
          email: user.email,
          firstname: user.firstname,
        },
        token: token,
      };

      return result;
    }
  }

  async createUserAddress({ id, address }: MutationAddUserAddressArgs) {
    let user = await this.findUser(id);

    if (!user) {
      throw new Error("utilisateur non trouvé");
    }

    const newAddress = await this.addressRepository.save({
      roadNumber: address.roadNumber,
      streetName: address.streetName,
      city: address.city,
      country: address.country,
    });
    await this.userRepository.update(id, { address: newAddress });
  }

  async updateUser(user: MutationUpdateUserArgs) {
    const {
      user: {
        id,
        firstname,
        lastname,
        birthdate,
        address,
        gender,
        phoneNumber,
      },
    } = user;
    try {
      const currentUser = await this.findUser(id);
      if (!currentUser) {
        throw new Error("Utilisateur introuvable");
      }
      await this.userRepository.update(id, {
        firstname,
        lastname,
        birthdate,
        gender,
        phoneNumber,
      });
      if (address) {
        if (currentUser.address) {
          const currentAddress = await this.addressService.getById(
            currentUser.address.id
          );

          //sinon on update l'addresse existante
          const { city, country, streetName, postalCode, roadNumber } = address;
          await this.addressRepository.update(currentAddress.id, {
            city,
            country,
            streetName,
            postalCode,
            roadNumber,
          });
        } else {
          // Si pas d'adresse existante alors on crée une nouvelle addresse pour le user
          const newAddress: MutationAddUserAddressArgs = {
            id: id,
            address: {
              streetName: address.streetName,
              roadNumber: address.roadNumber,
              postalCode: address.postalCode,
              country: address.country,
              city: address.city,
            },
          };
          await this.createUserAddress(newAddress);
        }
      }
      const result = await this.findUser(id);
      console.log(result);
      return result;
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  }
}

export default UserService;
