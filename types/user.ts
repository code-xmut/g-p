import { ObjectId } from "mongoose";

export type User = {
  _id?: ObjectId
  name: string;
  username: string;
  email: string;
  bio: string;
  location: string;
  avatar: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  likes?: ObjectId[];
  collections?: ObjectId[];
  shots?: ObjectId[];

  [key: string]: any;
}


export type CreateUserDto = Pick<User, "name" | "username" | "email" | "password">;

export type LoginUserDto = Pick<CreateUserDto, "email" | "password">;

export type UpdateUserProfileDto = Partial<Pick<User, "name" | "bio" | "location">>;
