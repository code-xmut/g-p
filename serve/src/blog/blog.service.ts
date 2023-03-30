import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createBlogDto, updateBlogDto } from '@gp/types';
import { Blog } from './blog.schema';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name)
    private readonly blogModel: Model<Blog>,
  ) {}

  async createBlog(blog: createBlogDto): Promise<Blog> {
    const createdBlog = new this.blogModel(blog);
    return createdBlog.save();
  }

  async findAll() {
    return await this.blogModel.find();
  }

  async deleteBlogById(id: string) {
    return await this.blogModel.findByIdAndDelete(id);
  }

  async findBlogByAuthor(author: string) {
    return await this.blogModel.find({ author });
  }

  async updateBlogById(id: string, blog: updateBlogDto) {
    return await this.blogModel.findByIdAndUpdate(id, blog, {
      new: true,
      runValidators: true,
    });
  }
}
