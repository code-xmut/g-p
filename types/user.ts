export type CreateUserDto = {
  name: string;
  username?: string;
  email: string;
  password: string;
  [key: string]: string;
}

export type LoginUserDto = {
  username: string;
  password: string;
  [key: string]: string;
}
