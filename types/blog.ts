export type Blog = {
  _id?: string;

  title: string;
  description: string;
  categories: string[];
  cover: string;
  content: string;
  author: string;

  createdAt?: Date;
  updatedAt?: Date;

  [key: string]: any;
}

export type createBlogDto = Pick<Blog, "title" | "cover" | 'description' | "content" | 'author'> & { [key: string]: any };

export type updateBlogDto = Partial<Pick<Blog, "title" | "categories" | "cover" | "content">> & { [key: string]: any };
