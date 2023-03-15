export type Tag = {
  _id?: string;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;

  [key: string]: any;
}

export type createTagDto = {
  title: string;
}

export type updateTagDto = {
  title?: string;
}
