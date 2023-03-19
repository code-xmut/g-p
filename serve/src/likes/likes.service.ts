import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Likes } from './likes.schema';

@Injectable()
export class LikesService {
  constructor(
    @InjectModel(Likes.name)
    private likesModule: Model<Likes>,
  ) {}

  async createLikes(userId: string): Promise<Likes> {
    return await this.likesModule.create({ userId });
  }

  async alreadyLiked(userId: string, shotId: string): Promise<boolean> {
    const likes = await this.likesModule.findOne({ userId });

    if (likes && likes.shots.includes(shotId)) {
      return true;
    }

    return false;
  }

  async addShotToLikes(userId: string, shotId: string) {
    const likes = await this.likesModule.findOne({ userId });

    if (await this.alreadyLiked(userId, shotId)) {
      throw new NotFoundException('Already liked');
    }

    if (!likes) {
      await this.createLikes(userId);
      const likes = await this.likesModule.findOne({ userId });
      likes.shots.push(shotId);

      return await likes.save();
    }

    likes.shots.push(shotId);

    return await likes.save();
  }

  async removeShotFromLikes(userId: string, shotId: string) {
    const likes = await this.likesModule.findOne({ userId });

    if (likes && likes.shots.includes(shotId)) {
      likes.shots = likes.shots.filter((shot) => shot !== shotId);

      return await likes.save();
    }

    throw new NotFoundException('No likes found');
  }

  async findAllLikes(): Promise<Likes[]> {
    return await this.likesModule.find();
  }

  async findLikesByUserId(userId: string): Promise<Likes> {
    const likes = await this.likesModule.findOne({ userId });
    if (!likes) {
      throw new NotFoundException('No likes found');
    }

    return likes;
  }
}
