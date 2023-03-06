export type CreateUserDto = {
  name: string;
  username?: string;
  email: string;
  password: string;
  [key: string]: string;
}
