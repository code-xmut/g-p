import { Shot } from "./shot";

export type Likes = {
  _id?: string;

  userId: string;
  shots: Shot[];

  createdAt?: Date;
  updatedAt?: Date;
}
