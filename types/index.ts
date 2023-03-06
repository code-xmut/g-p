import {
  CreateUserDto,
  LoginUserDto,
} from './user';

export type { 
  CreateUserDto,
  LoginUserDto,
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
