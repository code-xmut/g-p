import { updateTagDto } from '@gp/types';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag } from './tag.schema';

@Injectable()
export class TagsService {
  constructor(
    @InjectModel(Tag.name)
    private tagModel: Model<Tag>,
  ) {}

  async createTag(tag: Tag): Promise<Tag> {
    return await this.tagModel.create(tag);
  }

  async findAll() {
    return await this.tagModel.find();
  }

  async findTagById(id: string) {
    return await this.tagModel.findById(id);
  }

  async findTagByTitle(title: string) {
    return await this.tagModel.find({ title });
  }

  async updateTagById(id: string, tag: updateTagDto) {
    return await this.tagModel.findByIdAndUpdate(id, tag);
  }

  async findAssociateTags(q: string) {
    return await this.tagModel
      .find({ title: { $regex: q, $options: 'i' } })
      .then((tags) => {
        return tags.map((tag) => tag.title);
      });
  }

  async deleteTagById(id: string) {
    return await this.tagModel.findByIdAndDelete(id);
  }
}
