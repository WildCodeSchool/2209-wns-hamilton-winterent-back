import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = undefined | T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AccountNumber: any;
  BigInt: any;
  Byte: any;
  CountryCode: any;
  Cuid: any;
  Currency: any;
  DID: any;
  Date: any;
  DateTime: any;
  Duration: any;
  EmailAddress: any;
  GUID: any;
  HSL: any;
  HSLA: any;
  HexColorCode: any;
  Hexadecimal: any;
  IBAN: any;
  IP: any;
  IPv4: any;
  IPv6: any;
  ISBN: any;
  ISO8601Duration: any;
  JSON: any;
  JSONObject: any;
  JWT: any;
  Latitude: any;
  LocalDate: any;
  LocalEndTime: any;
  LocalTime: any;
  Locale: any;
  Long: any;
  Longitude: any;
  MAC: any;
  NegativeFloat: any;
  NegativeInt: any;
  NonEmptyString: any;
  NonNegativeFloat: any;
  NonNegativeInt: any;
  NonPositiveFloat: any;
  NonPositiveInt: any;
  ObjectID: any;
  PhoneNumber: any;
  Port: any;
  PositiveFloat: any;
  PositiveInt: any;
  PostalCode: any;
  RGB: any;
  RGBA: any;
  RoutingNumber: any;
  SafeInt: any;
  SemVer: any;
  Time: any;
  TimeZone: any;
  Timestamp: any;
  URL: any;
  USCurrency: any;
  UUID: any;
  UnsignedFloat: any;
  UnsignedInt: any;
  UtcOffset: any;
  Void: any;
};

export type AddRole = {
  role: Scalars['String'];
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  postalCode?: Maybe<Scalars['PostalCode']>;
  roadNumber?: Maybe<Scalars['Int']>;
  streetName?: Maybe<Scalars['String']>;
};

export type AddressUpdateInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  postalCode?: InputMaybe<Scalars['PostalCode']>;
  roadNumber?: InputMaybe<Scalars['Int']>;
  streetName?: InputMaybe<Scalars['String']>;
};

export type Booking = {
  __typename?: 'Booking';
  endDate?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['UUID']>;
  price?: Maybe<Scalars['Int']>;
  product?: Maybe<ProductBooking>;
  productInfos?: Maybe<ProductBookingInfos>;
  startDate?: Maybe<Scalars['Date']>;
};

export type BookingInput = {
  endDate?: InputMaybe<Scalars['Date']>;
  price?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['UUID']>;
  shopId?: InputMaybe<Scalars['UUID']>;
  startDate?: InputMaybe<Scalars['Date']>;
};

export type Category = {
  __typename?: 'Category';
  category: Scalars['String'];
  id: Scalars['UUID'];
};

export type Category_Size = {
  __typename?: 'Category_size';
  category_id: Scalars['Int'];
  id: Scalars['UUID'];
  label: Scalars['String'];
  size: Scalars['String'];
};

export type CreateAddress = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['PostalCode']>;
  roadNumber?: InputMaybe<Scalars['Int']>;
  streetName?: InputMaybe<Scalars['String']>;
};

export type CreateUser = {
  birthdate?: InputMaybe<Scalars['Date']>;
  confirmPassword: Scalars['String'];
  email: Scalars['EmailAddress'];
  firstname: Scalars['String'];
  gender?: InputMaybe<GenderType>;
  lastname: Scalars['String'];
  password: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['PhoneNumber']>;
  role?: InputMaybe<RoleType>;
};

export enum GenderType {
  Man = 'MAN',
  Other = 'OTHER',
  Woman = 'WOMAN'
}

export type LoginUser = {
  email: Scalars['EmailAddress'];
  password: Scalars['String'];
};

export type Logout = {
  __typename?: 'Logout';
  success?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addOrder?: Maybe<Order>;
  addProduct?: Maybe<Product>;
  addRole?: Maybe<RoleInfos>;
  addShop?: Maybe<Shop>;
  addUser: UserInfos;
  addUserAddress?: Maybe<Address>;
  deleteProduct?: Maybe<Scalars['String']>;
  deleteShop?: Maybe<Scalars['String']>;
  updateProduct?: Maybe<Product>;
  updateShop?: Maybe<Shop>;
  updateUser: UpdateUserType;
};


export type MutationAddOrderArgs = {
  orderInfos: OrderInput;
};


export type MutationAddProductArgs = {
  description: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  range: Scalars['String'];
};


export type MutationAddRoleArgs = {
  role?: InputMaybe<AddRole>;
};


export type MutationAddShopArgs = {
  shop: ShopInput;
};


export type MutationAddUserArgs = {
  user: CreateUser;
};


export type MutationAddUserAddressArgs = {
  address: CreateAddress;
  id: Scalars['UUID'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['UUID'];
};


export type MutationDeleteShopArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateProductArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  range?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateShopArgs = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateUserArgs = {
  user: UpdateUserInput;
};

export type Order = {
  __typename?: 'Order';
  bookings: Array<Booking>;
  date: Scalars['Date'];
  id: Scalars['UUID'];
  status: StatusType;
  user?: Maybe<User>;
};

export type OrderInput = {
  bookings?: InputMaybe<Array<InputMaybe<BookingInput>>>;
  userId?: InputMaybe<Scalars['UUID']>;
};

export type Product = {
  __typename?: 'Product';
  description: Scalars['String'];
  id: Scalars['UUID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  range: Scalars['String'];
};

export type ProductAdmin = {
  __typename?: 'ProductAdmin';
  category?: Maybe<Category>;
  description: Scalars['String'];
  id: Scalars['UUID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  priceHT?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  range: Scalars['String'];
};

export type ProductBooking = {
  __typename?: 'ProductBooking';
  id: Scalars['UUID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  productShopId?: Maybe<Scalars['UUID']>;
  range?: Maybe<Scalars['String']>;
};

export type ProductBookingInfos = {
  __typename?: 'ProductBookingInfos';
  priceHT?: Maybe<Scalars['Int']>;
};

export type ProductBookingInput = {
  id: Scalars['UUID'];
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  range?: InputMaybe<Scalars['String']>;
};

export type ProductCate = {
  __typename?: 'ProductCate';
  category?: Maybe<Category>;
  description: Scalars['String'];
  id: Scalars['UUID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  range: Scalars['String'];
};

export type ProductInfos = {
  __typename?: 'ProductInfos';
  price?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['UUID']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type ProductsFiltre = {
  __typename?: 'ProductsFiltre';
  category?: Maybe<Category>;
  shop?: Maybe<Shop>;
};

export type Quantity_Size = {
  __typename?: 'Quantity_size';
  id: Scalars['UUID'];
  quantity: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  cat?: Maybe<Category>;
  catProducts?: Maybe<Array<Maybe<Product>>>;
  category?: Maybe<Category>;
  checkUser?: Maybe<Scalars['Boolean']>;
  checkUserIsAdmin?: Maybe<Scalars['Boolean']>;
  getOrderById: Order;
  getOrderByUserId: Array<Order>;
  listCategory?: Maybe<Array<Maybe<Category>>>;
  listShop: Array<Maybe<Shop>>;
  login: UserInfos;
  logout?: Maybe<Logout>;
  product?: Maybe<Product>;
  productInfos?: Maybe<ProductInfos>;
  products: Array<Maybe<Product>>;
  productsAdmin: Array<Maybe<ProductAdmin>>;
  productsFilter: Array<Maybe<ProductCate>>;
  shop?: Maybe<Shop>;
  shops: Array<Maybe<Shop>>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryCatArgs = {
  category: Scalars['String'];
};


export type QueryCatProductsArgs = {
  id: Scalars['UUID'];
};


export type QueryCategoryArgs = {
  id: Scalars['UUID'];
};


export type QueryGetOrderByIdArgs = {
  orderId?: InputMaybe<Scalars['UUID']>;
};


export type QueryGetOrderByUserIdArgs = {
  userId?: InputMaybe<Scalars['UUID']>;
};


export type QueryListShopArgs = {
  city: Scalars['String'];
};


export type QueryLoginArgs = {
  user: LoginUser;
};


export type QueryProductArgs = {
  id: Scalars['UUID'];
};


export type QueryProductInfosArgs = {
  idProduct?: InputMaybe<Scalars['UUID']>;
  idShop?: InputMaybe<Scalars['UUID']>;
};


export type QueryProductsAdminArgs = {
  idCategory?: InputMaybe<Scalars['UUID']>;
  idShop?: InputMaybe<Scalars['UUID']>;
};


export type QueryProductsFilterArgs = {
  idCategory?: InputMaybe<Scalars['UUID']>;
  idShop?: InputMaybe<Scalars['UUID']>;
};


export type QueryShopArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['UUID'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['UUID'];
  role: RoleType;
};

export type RoleInfos = {
  __typename?: 'RoleInfos';
  role: Scalars['String'];
};

export enum RoleType {
  Admin = 'ADMIN',
  Superadmin = 'SUPERADMIN',
  User = 'USER'
}

export type Shop = {
  __typename?: 'Shop';
  address?: Maybe<Address>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ShopAdress = {
  __typename?: 'ShopAdress';
  address?: Maybe<Address>;
  name?: Maybe<Scalars['String']>;
};

export type ShopInput = {
  address: CreateAddress;
  name: Scalars['String'];
};

export enum StatusType {
  Cancel = 'CANCEL',
  Done = 'DONE',
  Inprogress = 'INPROGRESS'
}

export type UpdateUserInput = {
  address?: InputMaybe<AddressUpdateInput>;
  birthdate?: InputMaybe<Scalars['Date']>;
  email?: InputMaybe<Scalars['String']>;
  firstname: Scalars['String'];
  gender?: InputMaybe<GenderType>;
  id: Scalars['UUID'];
  lastname: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['PhoneNumber']>;
};

export type UpdateUserType = {
  __typename?: 'UpdateUserType';
  address?: Maybe<Address>;
  birthdate?: Maybe<Scalars['Date']>;
  firstname: Scalars['String'];
  gender?: Maybe<GenderType>;
  id: Scalars['UUID'];
  lastname: Scalars['String'];
  phoneNumber?: Maybe<Scalars['PhoneNumber']>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Address>;
  birthdate?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['EmailAddress']>;
  firstname: Scalars['String'];
  gender?: Maybe<GenderType>;
  id: Scalars['UUID'];
  lastname: Scalars['String'];
  phoneNumber?: Maybe<Scalars['PhoneNumber']>;
  role?: Maybe<Role>;
};

export type UserInfos = {
  __typename?: 'UserInfos';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<UserMinimal>;
};

export type UserMinimal = {
  __typename?: 'UserMinimal';
  email: Scalars['EmailAddress'];
  firstname: Scalars['String'];
  id: Scalars['UUID'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccountNumber: ResolverTypeWrapper<Scalars['AccountNumber']>;
  AddRole: AddRole;
  Address: ResolverTypeWrapper<Address>;
  AddressUpdateInput: AddressUpdateInput;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Booking: ResolverTypeWrapper<Booking>;
  BookingInput: BookingInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Byte: ResolverTypeWrapper<Scalars['Byte']>;
  Category: ResolverTypeWrapper<Category>;
  Category_size: ResolverTypeWrapper<Category_Size>;
  CountryCode: ResolverTypeWrapper<Scalars['CountryCode']>;
  CreateAddress: CreateAddress;
  CreateUser: CreateUser;
  Cuid: ResolverTypeWrapper<Scalars['Cuid']>;
  Currency: ResolverTypeWrapper<Scalars['Currency']>;
  DID: ResolverTypeWrapper<Scalars['DID']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Duration: ResolverTypeWrapper<Scalars['Duration']>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>;
  GUID: ResolverTypeWrapper<Scalars['GUID']>;
  GenderType: GenderType;
  HSL: ResolverTypeWrapper<Scalars['HSL']>;
  HSLA: ResolverTypeWrapper<Scalars['HSLA']>;
  HexColorCode: ResolverTypeWrapper<Scalars['HexColorCode']>;
  Hexadecimal: ResolverTypeWrapper<Scalars['Hexadecimal']>;
  IBAN: ResolverTypeWrapper<Scalars['IBAN']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IP: ResolverTypeWrapper<Scalars['IP']>;
  IPv4: ResolverTypeWrapper<Scalars['IPv4']>;
  IPv6: ResolverTypeWrapper<Scalars['IPv6']>;
  ISBN: ResolverTypeWrapper<Scalars['ISBN']>;
  ISO8601Duration: ResolverTypeWrapper<Scalars['ISO8601Duration']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  JWT: ResolverTypeWrapper<Scalars['JWT']>;
  Latitude: ResolverTypeWrapper<Scalars['Latitude']>;
  LocalDate: ResolverTypeWrapper<Scalars['LocalDate']>;
  LocalEndTime: ResolverTypeWrapper<Scalars['LocalEndTime']>;
  LocalTime: ResolverTypeWrapper<Scalars['LocalTime']>;
  Locale: ResolverTypeWrapper<Scalars['Locale']>;
  LoginUser: LoginUser;
  Logout: ResolverTypeWrapper<Logout>;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  Longitude: ResolverTypeWrapper<Scalars['Longitude']>;
  MAC: ResolverTypeWrapper<Scalars['MAC']>;
  Mutation: ResolverTypeWrapper<{}>;
  NegativeFloat: ResolverTypeWrapper<Scalars['NegativeFloat']>;
  NegativeInt: ResolverTypeWrapper<Scalars['NegativeInt']>;
  NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']>;
  NonNegativeFloat: ResolverTypeWrapper<Scalars['NonNegativeFloat']>;
  NonNegativeInt: ResolverTypeWrapper<Scalars['NonNegativeInt']>;
  NonPositiveFloat: ResolverTypeWrapper<Scalars['NonPositiveFloat']>;
  NonPositiveInt: ResolverTypeWrapper<Scalars['NonPositiveInt']>;
  ObjectID: ResolverTypeWrapper<Scalars['ObjectID']>;
  Order: ResolverTypeWrapper<Order>;
  OrderInput: OrderInput;
  PhoneNumber: ResolverTypeWrapper<Scalars['PhoneNumber']>;
  Port: ResolverTypeWrapper<Scalars['Port']>;
  PositiveFloat: ResolverTypeWrapper<Scalars['PositiveFloat']>;
  PositiveInt: ResolverTypeWrapper<Scalars['PositiveInt']>;
  PostalCode: ResolverTypeWrapper<Scalars['PostalCode']>;
  Product: ResolverTypeWrapper<Product>;
  ProductAdmin: ResolverTypeWrapper<ProductAdmin>;
  ProductBooking: ResolverTypeWrapper<ProductBooking>;
  ProductBookingInfos: ResolverTypeWrapper<ProductBookingInfos>;
  ProductBookingInput: ProductBookingInput;
  ProductCate: ResolverTypeWrapper<ProductCate>;
  ProductInfos: ResolverTypeWrapper<ProductInfos>;
  ProductsFiltre: ResolverTypeWrapper<ProductsFiltre>;
  Quantity_size: ResolverTypeWrapper<Quantity_Size>;
  Query: ResolverTypeWrapper<{}>;
  RGB: ResolverTypeWrapper<Scalars['RGB']>;
  RGBA: ResolverTypeWrapper<Scalars['RGBA']>;
  Role: ResolverTypeWrapper<Role>;
  RoleInfos: ResolverTypeWrapper<RoleInfos>;
  RoleType: RoleType;
  RoutingNumber: ResolverTypeWrapper<Scalars['RoutingNumber']>;
  SafeInt: ResolverTypeWrapper<Scalars['SafeInt']>;
  SemVer: ResolverTypeWrapper<Scalars['SemVer']>;
  Shop: ResolverTypeWrapper<Shop>;
  ShopAdress: ResolverTypeWrapper<ShopAdress>;
  ShopInput: ShopInput;
  StatusType: StatusType;
  String: ResolverTypeWrapper<Scalars['String']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  TimeZone: ResolverTypeWrapper<Scalars['TimeZone']>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']>;
  URL: ResolverTypeWrapper<Scalars['URL']>;
  USCurrency: ResolverTypeWrapper<Scalars['USCurrency']>;
  UUID: ResolverTypeWrapper<Scalars['UUID']>;
  UnsignedFloat: ResolverTypeWrapper<Scalars['UnsignedFloat']>;
  UnsignedInt: ResolverTypeWrapper<Scalars['UnsignedInt']>;
  UpdateUserInput: UpdateUserInput;
  UpdateUserType: ResolverTypeWrapper<UpdateUserType>;
  User: ResolverTypeWrapper<User>;
  UserInfos: ResolverTypeWrapper<UserInfos>;
  UserMinimal: ResolverTypeWrapper<UserMinimal>;
  UtcOffset: ResolverTypeWrapper<Scalars['UtcOffset']>;
  Void: ResolverTypeWrapper<Scalars['Void']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccountNumber: Scalars['AccountNumber'];
  AddRole: AddRole;
  Address: Address;
  AddressUpdateInput: AddressUpdateInput;
  BigInt: Scalars['BigInt'];
  Booking: Booking;
  BookingInput: BookingInput;
  Boolean: Scalars['Boolean'];
  Byte: Scalars['Byte'];
  Category: Category;
  Category_size: Category_Size;
  CountryCode: Scalars['CountryCode'];
  CreateAddress: CreateAddress;
  CreateUser: CreateUser;
  Cuid: Scalars['Cuid'];
  Currency: Scalars['Currency'];
  DID: Scalars['DID'];
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Duration: Scalars['Duration'];
  EmailAddress: Scalars['EmailAddress'];
  GUID: Scalars['GUID'];
  HSL: Scalars['HSL'];
  HSLA: Scalars['HSLA'];
  HexColorCode: Scalars['HexColorCode'];
  Hexadecimal: Scalars['Hexadecimal'];
  IBAN: Scalars['IBAN'];
  ID: Scalars['ID'];
  IP: Scalars['IP'];
  IPv4: Scalars['IPv4'];
  IPv6: Scalars['IPv6'];
  ISBN: Scalars['ISBN'];
  ISO8601Duration: Scalars['ISO8601Duration'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  JWT: Scalars['JWT'];
  Latitude: Scalars['Latitude'];
  LocalDate: Scalars['LocalDate'];
  LocalEndTime: Scalars['LocalEndTime'];
  LocalTime: Scalars['LocalTime'];
  Locale: Scalars['Locale'];
  LoginUser: LoginUser;
  Logout: Logout;
  Long: Scalars['Long'];
  Longitude: Scalars['Longitude'];
  MAC: Scalars['MAC'];
  Mutation: {};
  NegativeFloat: Scalars['NegativeFloat'];
  NegativeInt: Scalars['NegativeInt'];
  NonEmptyString: Scalars['NonEmptyString'];
  NonNegativeFloat: Scalars['NonNegativeFloat'];
  NonNegativeInt: Scalars['NonNegativeInt'];
  NonPositiveFloat: Scalars['NonPositiveFloat'];
  NonPositiveInt: Scalars['NonPositiveInt'];
  ObjectID: Scalars['ObjectID'];
  Order: Order;
  OrderInput: OrderInput;
  PhoneNumber: Scalars['PhoneNumber'];
  Port: Scalars['Port'];
  PositiveFloat: Scalars['PositiveFloat'];
  PositiveInt: Scalars['PositiveInt'];
  PostalCode: Scalars['PostalCode'];
  Product: Product;
  ProductAdmin: ProductAdmin;
  ProductBooking: ProductBooking;
  ProductBookingInfos: ProductBookingInfos;
  ProductBookingInput: ProductBookingInput;
  ProductCate: ProductCate;
  ProductInfos: ProductInfos;
  ProductsFiltre: ProductsFiltre;
  Quantity_size: Quantity_Size;
  Query: {};
  RGB: Scalars['RGB'];
  RGBA: Scalars['RGBA'];
  Role: Role;
  RoleInfos: RoleInfos;
  RoutingNumber: Scalars['RoutingNumber'];
  SafeInt: Scalars['SafeInt'];
  SemVer: Scalars['SemVer'];
  Shop: Shop;
  ShopAdress: ShopAdress;
  ShopInput: ShopInput;
  String: Scalars['String'];
  Time: Scalars['Time'];
  TimeZone: Scalars['TimeZone'];
  Timestamp: Scalars['Timestamp'];
  URL: Scalars['URL'];
  USCurrency: Scalars['USCurrency'];
  UUID: Scalars['UUID'];
  UnsignedFloat: Scalars['UnsignedFloat'];
  UnsignedInt: Scalars['UnsignedInt'];
  UpdateUserInput: UpdateUserInput;
  UpdateUserType: UpdateUserType;
  User: User;
  UserInfos: UserInfos;
  UserMinimal: UserMinimal;
  UtcOffset: Scalars['UtcOffset'];
  Void: Scalars['Void'];
};

export interface AccountNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AccountNumber'], any> {
  name: 'AccountNumber';
}

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['PostalCode']>, ParentType, ContextType>;
  roadNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  streetName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BookingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Booking'] = ResolversParentTypes['Booking']> = {
  endDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductBooking']>, ParentType, ContextType>;
  productInfos?: Resolver<Maybe<ResolversTypes['ProductBookingInfos']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ByteScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Byte'], any> {
  name: 'Byte';
}

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Category_SizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category_size'] = ResolversParentTypes['Category_size']> = {
  category_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CountryCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CountryCode'], any> {
  name: 'CountryCode';
}

export interface CuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cuid'], any> {
  name: 'Cuid';
}

export interface CurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Currency'], any> {
  name: 'Currency';
}

export interface DidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DID'], any> {
  name: 'DID';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DurationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Duration'], any> {
  name: 'Duration';
}

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export interface GuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GUID'], any> {
  name: 'GUID';
}

export interface HslScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSL'], any> {
  name: 'HSL';
}

export interface HslaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSLA'], any> {
  name: 'HSLA';
}

export interface HexColorCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColorCode'], any> {
  name: 'HexColorCode';
}

export interface HexadecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Hexadecimal'], any> {
  name: 'Hexadecimal';
}

export interface IbanScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IBAN'], any> {
  name: 'IBAN';
}

export interface IpScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IP'], any> {
  name: 'IP';
}

export interface IPv4ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv4'], any> {
  name: 'IPv4';
}

export interface IPv6ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv6'], any> {
  name: 'IPv6';
}

export interface IsbnScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISBN'], any> {
  name: 'ISBN';
}

export interface Iso8601DurationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601Duration'], any> {
  name: 'ISO8601Duration';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export interface JwtScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JWT'], any> {
  name: 'JWT';
}

export interface LatitudeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Latitude'], any> {
  name: 'Latitude';
}

export interface LocalDateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalDate'], any> {
  name: 'LocalDate';
}

export interface LocalEndTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalEndTime'], any> {
  name: 'LocalEndTime';
}

export interface LocalTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalTime'], any> {
  name: 'LocalTime';
}

export interface LocaleScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Locale'], any> {
  name: 'Locale';
}

export type LogoutResolvers<ContextType = any, ParentType extends ResolversParentTypes['Logout'] = ResolversParentTypes['Logout']> = {
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export interface LongitudeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Longitude'], any> {
  name: 'Longitude';
}

export interface MacScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MAC'], any> {
  name: 'MAC';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationAddOrderArgs, 'orderInfos'>>;
  addProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationAddProductArgs, 'description' | 'name' | 'range'>>;
  addRole?: Resolver<Maybe<ResolversTypes['RoleInfos']>, ParentType, ContextType, Partial<MutationAddRoleArgs>>;
  addShop?: Resolver<Maybe<ResolversTypes['Shop']>, ParentType, ContextType, RequireFields<MutationAddShopArgs, 'shop'>>;
  addUser?: Resolver<ResolversTypes['UserInfos'], ParentType, ContextType, RequireFields<MutationAddUserArgs, 'user'>>;
  addUserAddress?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType, RequireFields<MutationAddUserAddressArgs, 'address' | 'id'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id'>>;
  deleteShop?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteShopArgs, 'id'>>;
  updateProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'id'>>;
  updateShop?: Resolver<Maybe<ResolversTypes['Shop']>, ParentType, ContextType, RequireFields<MutationUpdateShopArgs, 'id'>>;
  updateUser?: Resolver<ResolversTypes['UpdateUserType'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'user'>>;
};

export interface NegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeFloat'], any> {
  name: 'NegativeFloat';
}

export interface NegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeInt'], any> {
  name: 'NegativeInt';
}

export interface NonEmptyStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonEmptyString'], any> {
  name: 'NonEmptyString';
}

export interface NonNegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeFloat'], any> {
  name: 'NonNegativeFloat';
}

export interface NonNegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeInt'], any> {
  name: 'NonNegativeInt';
}

export interface NonPositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveFloat'], any> {
  name: 'NonPositiveFloat';
}

export interface NonPositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveInt'], any> {
  name: 'NonPositiveInt';
}

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectID'], any> {
  name: 'ObjectID';
}

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  bookings?: Resolver<Array<ResolversTypes['Booking']>, ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface PhoneNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PhoneNumber'], any> {
  name: 'PhoneNumber';
}

export interface PortScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Port'], any> {
  name: 'Port';
}

export interface PositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveFloat'], any> {
  name: 'PositiveFloat';
}

export interface PositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveInt'], any> {
  name: 'PositiveInt';
}

export interface PostalCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PostalCode'], any> {
  name: 'PostalCode';
}

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  range?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductAdminResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductAdmin'] = ResolversParentTypes['ProductAdmin']> = {
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priceHT?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  range?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductBookingResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductBooking'] = ResolversParentTypes['ProductBooking']> = {
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productShopId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  range?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductBookingInfosResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductBookingInfos'] = ResolversParentTypes['ProductBookingInfos']> = {
  priceHT?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCate'] = ResolversParentTypes['ProductCate']> = {
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  range?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductInfosResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductInfos'] = ResolversParentTypes['ProductInfos']> = {
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductsFiltreResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsFiltre'] = ResolversParentTypes['ProductsFiltre']> = {
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  shop?: Resolver<Maybe<ResolversTypes['Shop']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Quantity_SizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Quantity_size'] = ResolversParentTypes['Quantity_size']> = {
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  cat?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCatArgs, 'category'>>;
  catProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, RequireFields<QueryCatProductsArgs, 'id'>>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, 'id'>>;
  checkUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  checkUserIsAdmin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  getOrderById?: Resolver<ResolversTypes['Order'], ParentType, ContextType, Partial<QueryGetOrderByIdArgs>>;
  getOrderByUserId?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, Partial<QueryGetOrderByUserIdArgs>>;
  listCategory?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  listShop?: Resolver<Array<Maybe<ResolversTypes['Shop']>>, ParentType, ContextType, RequireFields<QueryListShopArgs, 'city'>>;
  login?: Resolver<ResolversTypes['UserInfos'], ParentType, ContextType, RequireFields<QueryLoginArgs, 'user'>>;
  logout?: Resolver<Maybe<ResolversTypes['Logout']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  productInfos?: Resolver<Maybe<ResolversTypes['ProductInfos']>, ParentType, ContextType, Partial<QueryProductInfosArgs>>;
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  productsAdmin?: Resolver<Array<Maybe<ResolversTypes['ProductAdmin']>>, ParentType, ContextType, Partial<QueryProductsAdminArgs>>;
  productsFilter?: Resolver<Array<Maybe<ResolversTypes['ProductCate']>>, ParentType, ContextType, Partial<QueryProductsFilterArgs>>;
  shop?: Resolver<Maybe<ResolversTypes['Shop']>, ParentType, ContextType, RequireFields<QueryShopArgs, 'id'>>;
  shops?: Resolver<Array<Maybe<ResolversTypes['Shop']>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export interface RgbScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGB'], any> {
  name: 'RGB';
}

export interface RgbaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBA'], any> {
  name: 'RGBA';
}

export type RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = {
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['RoleType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleInfosResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleInfos'] = ResolversParentTypes['RoleInfos']> = {
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface RoutingNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RoutingNumber'], any> {
  name: 'RoutingNumber';
}

export interface SafeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SafeInt'], any> {
  name: 'SafeInt';
}

export interface SemVerScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SemVer'], any> {
  name: 'SemVer';
}

export type ShopResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shop'] = ResolversParentTypes['Shop']> = {
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShopAdressResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopAdress'] = ResolversParentTypes['ShopAdress']> = {
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export interface TimeZoneScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TimeZone'], any> {
  name: 'TimeZone';
}

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export interface UsCurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['USCurrency'], any> {
  name: 'USCurrency';
}

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export interface UnsignedFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedFloat'], any> {
  name: 'UnsignedFloat';
}

export interface UnsignedIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedInt'], any> {
  name: 'UnsignedInt';
}

export type UpdateUserTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserType'] = ResolversParentTypes['UpdateUserType']> = {
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  birthdate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['GenderType']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['PhoneNumber']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  birthdate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['EmailAddress']>, ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['GenderType']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['PhoneNumber']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserInfosResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserInfos'] = ResolversParentTypes['UserInfos']> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserMinimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMinimalResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMinimal'] = ResolversParentTypes['UserMinimal']> = {
  email?: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UtcOffsetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UtcOffset'], any> {
  name: 'UtcOffset';
}

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type Resolvers<ContextType = any> = {
  AccountNumber?: GraphQLScalarType;
  Address?: AddressResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Booking?: BookingResolvers<ContextType>;
  Byte?: GraphQLScalarType;
  Category?: CategoryResolvers<ContextType>;
  Category_size?: Category_SizeResolvers<ContextType>;
  CountryCode?: GraphQLScalarType;
  Cuid?: GraphQLScalarType;
  Currency?: GraphQLScalarType;
  DID?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Duration?: GraphQLScalarType;
  EmailAddress?: GraphQLScalarType;
  GUID?: GraphQLScalarType;
  HSL?: GraphQLScalarType;
  HSLA?: GraphQLScalarType;
  HexColorCode?: GraphQLScalarType;
  Hexadecimal?: GraphQLScalarType;
  IBAN?: GraphQLScalarType;
  IP?: GraphQLScalarType;
  IPv4?: GraphQLScalarType;
  IPv6?: GraphQLScalarType;
  ISBN?: GraphQLScalarType;
  ISO8601Duration?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  JWT?: GraphQLScalarType;
  Latitude?: GraphQLScalarType;
  LocalDate?: GraphQLScalarType;
  LocalEndTime?: GraphQLScalarType;
  LocalTime?: GraphQLScalarType;
  Locale?: GraphQLScalarType;
  Logout?: LogoutResolvers<ContextType>;
  Long?: GraphQLScalarType;
  Longitude?: GraphQLScalarType;
  MAC?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  NegativeFloat?: GraphQLScalarType;
  NegativeInt?: GraphQLScalarType;
  NonEmptyString?: GraphQLScalarType;
  NonNegativeFloat?: GraphQLScalarType;
  NonNegativeInt?: GraphQLScalarType;
  NonPositiveFloat?: GraphQLScalarType;
  NonPositiveInt?: GraphQLScalarType;
  ObjectID?: GraphQLScalarType;
  Order?: OrderResolvers<ContextType>;
  PhoneNumber?: GraphQLScalarType;
  Port?: GraphQLScalarType;
  PositiveFloat?: GraphQLScalarType;
  PositiveInt?: GraphQLScalarType;
  PostalCode?: GraphQLScalarType;
  Product?: ProductResolvers<ContextType>;
  ProductAdmin?: ProductAdminResolvers<ContextType>;
  ProductBooking?: ProductBookingResolvers<ContextType>;
  ProductBookingInfos?: ProductBookingInfosResolvers<ContextType>;
  ProductCate?: ProductCateResolvers<ContextType>;
  ProductInfos?: ProductInfosResolvers<ContextType>;
  ProductsFiltre?: ProductsFiltreResolvers<ContextType>;
  Quantity_size?: Quantity_SizeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RGB?: GraphQLScalarType;
  RGBA?: GraphQLScalarType;
  Role?: RoleResolvers<ContextType>;
  RoleInfos?: RoleInfosResolvers<ContextType>;
  RoutingNumber?: GraphQLScalarType;
  SafeInt?: GraphQLScalarType;
  SemVer?: GraphQLScalarType;
  Shop?: ShopResolvers<ContextType>;
  ShopAdress?: ShopAdressResolvers<ContextType>;
  Time?: GraphQLScalarType;
  TimeZone?: GraphQLScalarType;
  Timestamp?: GraphQLScalarType;
  URL?: GraphQLScalarType;
  USCurrency?: GraphQLScalarType;
  UUID?: GraphQLScalarType;
  UnsignedFloat?: GraphQLScalarType;
  UnsignedInt?: GraphQLScalarType;
  UpdateUserType?: UpdateUserTypeResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserInfos?: UserInfosResolvers<ContextType>;
  UserMinimal?: UserMinimalResolvers<ContextType>;
  UtcOffset?: GraphQLScalarType;
  Void?: GraphQLScalarType;
};

