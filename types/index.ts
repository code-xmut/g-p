import {
  CreateUserDto,
  LoginUserDto,
  UpdateUserProfileDto,
  UserPageDocument,
} from './user';
import { ShotDraft, Shot, ShotDto, createShotDto, updateShotDto, ShotPageDocument } from './shot';
import { Comment, CommentDto, createCommentDto, updateCommentDto } from './comment';
import { Tag, createTagDto, updateTagDto } from './tag'
import { Collection,createCollectionDto, updateCollectionDto } from './collections';
import { Likes } from './likes';
import { Blog, createBlogDto, updateBlogDto } from './blog';


export type { 
  CreateUserDto,
  LoginUserDto,
  UpdateUserProfileDto,
  UserPageDocument,
  
  Shot,
  ShotDraft,
  ShotDto,
  createShotDto,
  updateShotDto,
  ShotPageDocument,
  
  Comment,
  CommentDto,
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
