import {
  CreateUserDto,
  LoginUserDto,
  UpdateUserProfileDto,
} from './user';
import { Shot, ShotDto, createShotDto, updateShotDto } from './shot';
import { Comment, createCommentDto, updateCommentDto } from './comment';
import { Tag, createTagDto, updateTagDto } from './tag'
import { Collection,createCollectionDto, updateCollectionDto } from './collections';
import { Likes } from './likes';


export type { 
  CreateUserDto,
  LoginUserDto,
  UpdateUserProfileDto,
  
  Shot,
  ShotDto,
  createShotDto,
  updateShotDto,
  
  Comment,
  createCommentDto,
  updateCommentDto,

  Tag,
  createTagDto,
  updateTagDto,

  Collection,
  createCollectionDto,
  updateCollectionDto,

  Likes
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
