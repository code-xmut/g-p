import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shot } from './shot.schema';

@Injectable()
export class ShotsService {
  constructor(
    @InjectModel(Shot.name)
    private shotModel: Model<Shot>,
  ) {}

  async findAll() {
    return await this.shotModel.find();
  }
}
