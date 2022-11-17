export interface IUser {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;

}

export interface ICreateUser {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export interface IRegisterUserInput {
    registerUserInput: {
      username: string;
      password: string;
      firstname: string;
      lastname: string;
    };
  }

export interface ILoginUserInput {
    loginUserInput: {
      email: string;
      password: string;
    }
}