export type Comment = {
  _id?: string;
  content: string;
  user: string;
  shotId: string;
  likes: string[];
  dislikes: string[];

  createdAt?: Date;
  updatedAt?: Date;
  [key: string]: any;
}

export type CommentDto = Comment 

export type createCommentDto = {
  content: string;
  user: string;
  shotId: string;
}

export type updateCommentDto = {
  content?: string;
  likes?: number;
  dislikes?: number;
}
