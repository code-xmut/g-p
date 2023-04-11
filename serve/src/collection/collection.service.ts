import { createCollectionDto, updateCollectionDto } from '@gp/types';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ShotsService } from 'src/shots/shots.service';
import { Collection } from './collection.schema';

@Injectable()
export class CollectionService {
  constructor(
    @InjectModel(Collection.name)
    private collectionModel: Model<Collection>,
    private readonly shotsService: ShotsService,
  ) {}

  async createCollection(collection: createCollectionDto): Promise<Collection> {
    return await this.collectionModel.create(collection);
  }

  async findAll() {
    return await this.collectionModel.find();
  }

  async findCollectionById(id: string) {
    const collection = await this.collectionModel.findById(id);

    if (collection) {
      return collection;
    }

    throw new NotFoundException('Collection not found');
  }

  async findCollectionByUserId(userId: string) {
    const collection = await this.collectionModel.find({ userId });

    if (collection) {
      return collection;
    }

    throw new NotFoundException('Collection not found');
  }

  async updateCollectionById(id: string, collection: updateCollectionDto) {
    const c = await this.collectionModel.findByIdAndUpdate(id, collection);

    if (c) {
      return c;
    }

    throw new NotFoundException('Collection not found');
  }

  async deleteCollectionById(id: string) {
    return await this.collectionModel.findByIdAndDelete(id);
  }

  async addShotToCollection(collectionId: string, shotId: string) {
    const collection = await this.collectionModel.findById(collectionId);
    const shot = await this.shotsService.findShotById(shotId);
    const shots = new Set();

    collection.shots?.map((s) => shots.add(s));

    if (collection && shots.has(shotId)) {
      throw new NotFoundException('Shot already in collection');
    }

    collection.shots.push(shot as any);

    return await collection.save();
  }

  async removeShotFromCollection(collectionId: string, shotId: string) {
    const collection = await this.collectionModel.findById(collectionId);

    collection.shots = collection.shots.filter(
      (s) => s._id.toString() !== shotId,
    );
    return await collection.save();
  }

  async shotExistCollections(userId: string, shotId: string) {
    const collections = await this.collectionModel.find({ userId });

    const collectionIds = [];
    collections.map((c) => {
      c.shots.map((s) => {
        if (s._id.toString() === shotId) {
          collectionIds.push(c.id);
        }
      });
    });

    return collectionIds;
  }
}
