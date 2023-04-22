export type User = {
  _id?: string

  name: string;
  username: string;
  email: string;
  bio: string;
  location: string;
  avatar: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  likes?: string[];
  collections?: string[];
  shots?: string[];

  [key: string]: any;
}

export type UserInfo = Omit<User, 'password'>

export type CreateUserDto = Pick<User, "username" | "email" | "password"> & { [key: string]: any };

export type LoginUserDto = Pick<CreateUserDto, "password"> & Partial<Pick<CreateUserDto, "username" | "email">> & { [key: string]: any };

export type UpdateUserProfileDto = Partial<Pick<User,"_id" | "name" | "bio" | "location">>;

export type UserPageDocument = {
  total: number;
  users: UserInfo[];
  hasNext: boolean;
}
