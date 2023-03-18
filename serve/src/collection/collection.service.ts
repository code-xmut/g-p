import { createCollectionDto, updateCollectionDto } from '@gp/types';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ShotDocument } from 'src/shots/shot.schema';
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

    if (collection && collection.shots.includes(shotId)) {
      throw new NotFoundException('Shot already in collection');
    }

    collection.shots.push(shot.id);

    return await collection.save();
  }

  async removeShotFromCollection(collectionId: string, shotId: string) {
    const collection = await this.collectionModel.findById(collectionId);
    const shot = await this.shotsService.findShotById(shotId);

    if (collection && !collection.shots.includes(shotId)) {
      throw new NotFoundException('Shot not in collection');
    }

    collection.shots = collection.shots.filter((s) => s !== shot.id);

    return await collection.save();
  }
}
