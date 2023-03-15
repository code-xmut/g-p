import {
  CreateUserDto,
  LoginUserDto,
  UpdateUserProfileDto
} from './user';

import { Shot, createShotDto, updateShotDto } from './shot';

import { Comment, createCommentDto, updateCommentDto } from './comment';

import { Tag, createTagDto, updateTagDto } from './tag'

export type { 
  CreateUserDto,
  LoginUserDto,
  UpdateUserProfileDto,
  
  Shot,
  createShotDto,
  updateShotDto,
  
  Comment,
  createCommentDto,
  updateCommentDto,

  Tag,
  createTagDto,
  updateTagDto
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
