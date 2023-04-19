import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Likes } from './likes.schema';
import { ShotsService } from 'src/shots/shots.service';
import { CollectionService } from 'src/collection/collection.service';
import { Collection, Shot } from '@gp/types';

@Injectable()
export class LikesService {
  constructor(
    @InjectModel(Likes.name)
    private likesModule: Model<Likes>,
    private readonly shotsService: ShotsService,
    private readonly collectionService: CollectionService,
  ) {}

  async createLikes(userId: string): Promise<Likes> {
    return await this.likesModule.create({ userId });
  }

  async addShotToLikes(userId: string, shotId: string) {
    const likes = await this.likesModule.findOne({ userId });
    const shot = await this.shotsService.findShotById(shotId);
    const shots = new Set<string>();

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

    for (const value of shots) {
      const temp = await this.shotsService.findShotById(value);
      likes.shots = [];
      likes.shots.push(temp as any);
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

  async addShotStatus(userId: string, shots: Shot[]) {
    const likes = await this.findLikesByUserId(userId);
    const collection = await this.collectionService.findCollectionByUserId(
      userId,
    );

    const collectedShot: string[] = [];
    collection.forEach((c) => {
      c.shots.map((s) => {
        collectedShot.push(s._id.toString());
      });
    });

    const returnShot = JSON.parse(JSON.stringify(shots)) as Shot[];
    returnShot.forEach((s) => {
      if (likes) {
        likes.shots.forEach((l) => {
          if (s._id.toString() === l._id.toString()) {
            s.liked = true;
          }
        });
      }
      if (collectedShot) {
        collectedShot.forEach((c) => {
          if (s._id.toString() === c) {
            s.collected = true;
          }
        });
      }
    });

    return returnShot;
  }

  async findLikesByUserId(userId: string) {
    const likes = await this.likesModule.findOne({ userId });

    return likes;
  }

  async findUserLikesWithStatus(userId: string) {
    const likes = await this.findLikesByUserId(userId);
    // const likesWithStatus = await this.addShotStatus(userId, likes.shots);
    const likedShots = JSON.parse(JSON.stringify(likes)) as Likes;
    likedShots.shots = await this.addShotStatus(userId, likes.shots);

    return likedShots;
  }

  async deleteLikesByUserId(userId: string) {
    return await this.likesModule.findOneAndDelete({ userId });
  }

  async findShotsWithStatus(
    userId: string,
    page: number,
    size: number,
    q = '',
    sort?: string,
    order?: string,
  ) {
    const shot = await this.shotsService.findPage(page, size, q, sort, order);
    if (userId) {
      const likes = await this.findLikesByUserId(userId);
      console.log(likes);
      const collection = await this.collectionService.findCollectionByUserId(
        userId,
      );
      const collectedShot: string[] = [];
      collection.forEach((c) => {
        c.shots.map((s) => {
          collectedShot.push(s._id.toString());
        });
      });

      const returnShot = JSON.parse(JSON.stringify(shot)) as Shot[];
      returnShot.forEach((s) => {
        if (likes) {
          likes.shots.forEach((l) => {
            if (s._id.toString() === l._id.toString()) {
              s.liked = true;
            }
          });
        }
        if (collectedShot) {
          collectedShot.forEach((c) => {
            if (s._id.toString() === c) {
              s.collected = true;
            }
          });
        }
      });

      const total = await this.shotsService.findShotsTotal(q);
      const hasNext = page * size < total;

      return {
        hasNext,
        shots: returnShot,
      };
    }
    return shot;
  }
}
