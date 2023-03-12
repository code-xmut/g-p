
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

export type createShotDto = {
  title: string;
  description: string;
  tags: string[];
  cover: string;
  content: string;
  serverUrl: string;
}

export type updateShotDto = {
  title?: string;
  description?: string;
  tags?: string[];
  cover?: string;
  content?: string;
  serverUrl?: string;
}
