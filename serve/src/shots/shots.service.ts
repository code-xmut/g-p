import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { createShotDto, updateShotDto } from '@gp/types';
import { Model } from 'mongoose';
import { Shot } from './shot.schema';

@Injectable()
export class ShotsService {
  constructor(
    @InjectModel(Shot.name)
    private shotModel: Model<Shot>,
  ) {}

  async createShots(shot: createShotDto): Promise<Shot> {
    const createdShot = new this.shotModel(shot);
    return createdShot.save();
  }

  async findAll() {
    return await this.shotModel.find();
  }

  async findPage(page: number, size: number, sort?: string, order?: string) {
    return await this.shotModel
      .find()
      .skip((page - 1) * size)
      .limit(size)
      .sort({ [sort]: order } as any);
  }

  findShotByTag(tag: string) {
    return this.shotModel.find({ tags: tag });
  }

  async findShotById(id: string) {
    return await this.shotModel.findById(id);
  }

  async findShotsAndSortAscByCreatedAt() {
    return await this.shotModel.find().sort({ createdAt: 1 });
  }

  async findShotsAndDescByCreatedAt() {
    return await this.shotModel.find().sort({ createdAt: -1 });
  }

  async findShotsAndSorAscByLikes() {
    return await this.shotModel.find().sort({ likes: 1 });
  }

  async findShotsAndSortDescByLikes() {
    return await this.shotModel.find().sort({ likes: -1 });
  }

  async shotFuseSearch(pattern: string) {
    return await this.shotModel.find({
      $or: [
        { title: { $regex: pattern, $options: 'i' } },
        { description: { $regex: pattern, $options: 'i' } },
        { tags: { $regex: pattern, $options: 'i' } },
      ],
    });
  }

  async addCommentToShot(id: string, comment: any) {
    return await this.shotModel.findByIdAndUpdate(id, {
      $push: { comments: comment },
    });
  }

  async updateShotById(id: string, shot: updateShotDto) {
    return await this.shotModel.findByIdAndUpdate(id, shot);
  }

  async likeShotById(id: string) {
    return await this.shotModel.findByIdAndUpdate(id, {
      $inc: { likes: 1 },
    });
  }

  async deleteShotById(id: string) {
    return await this.shotModel.findByIdAndDelete(id);
  }
}
