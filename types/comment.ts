export type Comment = {
  _id?: string;
  content: string;
  user: string;
  shotId: string;
  likes: number;
  dislikes: number;

  createdAt?: Date;
  updatedAt?: Date;
  [key: string]: any;
}
