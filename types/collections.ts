import { Shot } from './shot'

export type Collection = {
  _id?: string;

  userId: string;
  title: string;
  description?: string;
  shots?: Shot[];

  createdAt?: Date;
  updatedAt?: Date;

  [key: string]: any;
}

export type createCollectionDto = {
  userId: string;
  title: string;
  description?: string;
}

export type updateCollectionDto = {
  title?: string;
  description?: string;
}
