import {
  CreateUserDto,
  LoginUserDto,
  UpdateUserProfileDto,
} from './user';
import { PublishState, Shot, ShotDto, createShotDto, updateShotDto } from './shot';
import { Comment, createCommentDto, updateCommentDto } from './comment';
import { Tag, createTagDto, updateTagDto } from './tag'
import { Collection,createCollectionDto, updateCollectionDto } from './collections';
import { Likes } from './likes';
import { Blog, createBlogDto, updateBlogDto } from './blog';


export type { 
  CreateUserDto,
  LoginUserDto,
  UpdateUserProfileDto,
  
  PublishState,
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

  Likes,

  Blog,
  createBlogDto,
  updateBlogDto
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
