import {
  CreateUserDto,
  LoginUserDto,
  UpdateUserProfileDto
} from './user';

import { Shot, createShotDto, updateShotDto } from './shot';

export type { 
  CreateUserDto,
  LoginUserDto,
  UpdateUserProfileDto,
  Shot,
  createShotDto,
  updateShotDto
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
