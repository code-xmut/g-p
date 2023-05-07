import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createBlogDto, updateBlogDto } from '@gp/types';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post(':author')
  async createBlog(
    @Param('author') author: string,
    @Body() blog: createBlogDto,
  ) {
    blog.author = author;
    return await this.blogService.createBlog(blog);
  }

  @Get()
  async findAll() {
    return await this.blogService.findAll();
  }

  @Get(':id')
  async findBlogById(@Param('id') id: string) {
    return await this.blogService.findBlogById(id);
  }

  @Delete(':id')
  async deleteBlogById(@Param('id') id: string) {
    return await this.blogService.deleteBlogById(id);
  }

  @Get('author/:author')
  async findBlogByAuthor(@Param('author') author: string) {
    return await this.blogService.findBlogByAuthor(author);
  }

  @Put(':id')
  async updateBlogById(@Param('id') id: string, @Body() blog: updateBlogDto) {
    return await this.blogService.updateBlogById(id, blog);
  }
}
