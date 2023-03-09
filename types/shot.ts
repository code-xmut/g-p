
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
  comments: string[];

  createdAt?: Date;
  updatedAt?: Date;

  [key: string]: any;
}
