import { Comment } from './comment'

export type Shot = {
  _id?: string;
  title: string;
  description: string;
  tags: string[];
  cover: string;
  content: string;
  user: string;
  serverUrl: string;
  likes: number;
  shares: number;
  collections: number;
  comments: Comment[];

  state: 'published' | 'draft';

  createdAt?: Date;
  updatedAt?: Date;

  [key: string]: any;
}

/**
 * @description 兼容前端，莫名其妙报错不能import Shot
 */
export type ShotDto = Shot;

export type ShotDraft = Pick<Shot, 'title' | 'cover' | 'content' | 'state'>

export type createShotDto = Pick<Shot, 'title' | 'description' | 'tags' | 'cover' | 'content' | 'user' | 'serverUrl' | 'state'> 
  & { [key: string]: any };

export type updateShotDto = Partial<Pick<Shot, 'title' | 'description' | 'tags' | 'cover' | 'content' | 'serverUrl' | 'state'>> & { [key: string]: any };
