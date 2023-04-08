import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Likes } from './likes.schema';
import { ShotsService } from 'src/shots/shots.service';

@Injectable()
export class LikesService {
  constructor(
    @InjectModel(Likes.name)
    private likesModule: Model<Likes>,
    private readonly shotsService: ShotsService,
  ) {}

  async createLikes(userId: string): Promise<Likes> {
    return await this.likesModule.create({ userId });
  }

  async addShotToLikes(userId: string, shotId: string) {
    const likes = await this.likesModule.findOne({ userId });
    const shot = await this.shotsService.findShotById(shotId);
    const shots = new Set();

    if (!likes) {
      await this.createLikes(userId);
      const likes = await this.likesModule.findOne({ userId });
      likes.shots.push(shot as any);

      return await likes.save();
    }

    likes.shots.map((shot) => shots.add(shot._id.toString()));

    if (shots.has(shotId)) {
      throw new NotFoundException('Already liked');
    }

    likes.shots.push(shot as any);

    return await likes.save();
  }

  async removeShotFromLikes(userId: string, shotId: string) {
    const likes = await this.likesModule.findOne({ userId });
    likes.shots = likes.shots.filter((shot) => shot._id.toString() !== shotId);

    return await likes.save();
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

  async deleteLikesByUserId(userId: string) {
    return await this.likesModule.findOneAndDelete({ userId });
  }
}
