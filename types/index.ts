import {
  CreateUserDto,
  LoginUserDto,
  UpdateUserProfileDto
} from './user';

export type { 
  CreateUserDto,
  LoginUserDto,
  UpdateUserProfileDto
};

export interface IMyInterface  {
  id: number;
  name: string;
  habits: string[]
}

export type User = {
  id?: number;
  name: string;
  username: string;
  password: string;
}
