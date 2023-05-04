import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ShotDraft, createShotDto, updateShotDto } from '@gp/types';
import { Model } from 'mongoose';
import { Shot, ShotDocument } from './shot.schema';

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

  async createShotDraft(shot: ShotDraft): Promise<Shot> {
    if (!shot._id) {
      const createdShot = new this.shotModel(shot);
      return createdShot.save();
    } else {
      const existShot = await this.shotModel.findById(shot._id);
      if (existShot) {
        return await this.shotModel.findByIdAndUpdate(shot._id, shot);
      }
    }
  }

  async findAll() {
    return await this.shotModel.find();
  }

  async findPage(
    page: number,
    size: number,
    q?: string,
    condition = '',
    sort?: string,
    order?: string,
  ) {
    switch (condition) {
      case 'tag':
        return await this.findPageByTag(page, size, q, sort, order);
      case 'time':
        return await this.findPageByCreateTime(page, size, q);
      default:
        return await this.shotModel
          .find({
            $or: [
              { title: { $regex: q, $options: 'i' } },
              { description: { $regex: q, $options: 'i' } },
              { tags: { $regex: q, $options: 'i' } },
            ],
          })
          .where('state')
          .equals('published')
          .sort({ [sort]: order === 'desc' ? 1 : -1 })
          .skip((page - 1) * size)
          .limit(size);
    }
  }

  async findPageByCreateTime(page: number, size: number, time?: string) {
    return await this.shotModel
      .find({
        createdAt: { $gte: new Date(time) },
      })
      .where('state')
      .equals('published')
      .sort({ createdAt: -1 })
      .skip((page - 1) * size)
      .limit(size);
  }

  async findPageByTag(
    page: number,
    size: number,
    tag: string,
    sort?: string,
    order?: string,
  ) {
    return await this.shotModel
      .find({ tags: tag })
      .where('state')
      .equals('published')
      .sort({ [sort]: order === 'asc' ? 1 : -1 })
      .skip((page - 1) * size)
      .limit(size);
  }

  findShotByTag(tag: string): Promise<ShotDocument[]> {
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

  async findUserDraft(UserName: string) {
    return await this.shotModel.find({ user: UserName, state: 'draft' });
  }

  async findShotsAndSorAscByLikes() {
    return await this.shotModel.find().sort({ likes: 1 });
  }

  async findShotsAndSortDescByLikes() {
    return await this.shotModel.find().sort({ likes: -1 });
  }

  async findShotsTotal(q = '') {
    return await this.shotModel
      .find({
        $or: [
          { title: { $regex: q, $options: 'i' } },
          { description: { $regex: q, $options: 'i' } },
          { tags: { $regex: q, $options: 'i' } },
        ],
      })
      .count();
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

  async findShotsByUserName(UserName: string) {
    return await this.shotModel.find({ user: UserName });
  }

  async updateShotById(id: string, shot: updateShotDto) {
    return await this.shotModel.findByIdAndUpdate(id, shot);
  }

  async collectShotById(id: string) {
    return await this.shotModel.findByIdAndUpdate(id, {
      $inc: { collections: 1 },
    });
  }

  async unCollectShotById(id: string) {
    return await this.shotModel.findByIdAndUpdate(id, {
      $inc: { collections: -1 },
    });
  }

  async likeShotById(id: string) {
    return await this.shotModel.findByIdAndUpdate(id, {
      $inc: { likes: 1 },
    });
  }

  async unlikeShotById(id: string) {
    return await this.shotModel.findByIdAndUpdate(id, {
      $inc: { likes: -1 },
    });
  }

  async deleteShotById(id: string) {
    return await this.shotModel.findByIdAndDelete(id);
  }
}
