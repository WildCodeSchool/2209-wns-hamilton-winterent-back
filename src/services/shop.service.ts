import datasource from "../lib/datasource";
import Shop from "../entity/Shop";
import { MutationAddShopArgs, ShopInput } from "../generated/graphql";
import Address from "../entity/Address";


interface ICreateShop {
  name: string,
  roadNumber: number,
  streetName: string,
  city: string,
  country: string
}
class ShopService {
  shopRepository;
  addressRepository;
  constructor() {
    this.shopRepository = datasource.getRepository(Shop);
    this.addressRepository = datasource.getRepository(Address);
  }

  async findAll(): Promise<Shop[]> {
    return await this.shopRepository.find();
  }

  async findShop(id: number) {
    return await this.shopRepository.findOneBy({ id });
  }
  async createShop({
    name,
    address
  }: ShopInput): Promise<Shop> {
    const newAddress = await this.addressRepository.save(address);
    return await this.shopRepository.save({ name, address: newAddress });
  }
}

export default ShopService;