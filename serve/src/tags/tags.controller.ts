import { createTagDto, updateTagDto } from '@gp/types';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  async findAll() {
    return await this.tagsService.findAll();
  }

  @Post()
  async createTag(@Body() tag: createTagDto) {
    return await this.tagsService.createTag(tag);
  }

  @Get(':id')
  async findTagById(@Param('id') id: string) {
    return await this.tagsService.findTagById(id);
  }

  @Get('search/:title')
  async findTagByTitle(@Param('title') title: string) {
    return await this.tagsService.findTagByTitle(title);
  }

  @Put(':id')
  async updateTagById(@Param('id') id: string, @Body() tag: updateTagDto) {
    return await this.tagsService.updateTagById(id, tag);
  }

  @Delete(':id')
  async deleteTagById(@Param('id') id: string) {
    return await this.tagsService.deleteTagById(id);
  }

  @Get('associate/:q')
  async findAssociateTags(@Param('q') q: string) {
    return await this.tagsService.findAssociateTags(q);
  }
}
