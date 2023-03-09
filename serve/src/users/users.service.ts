import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model, ObjectId } from 'mongoose';
import type { CreateUserDto, UpdateUserProfileDto } from '@gp/types';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async isUserNameValid(username: string): Promise<boolean> {
    const user = await this.userModel.findOne({ username });
    if (user) {
      throw new NotFoundException('Username already exists.');
    }

    return true;
  }

  async isUserExist(id: ObjectId): Promise<boolean> {
    const user = await this.userModel.findById(id);

    if (!user) {
      return false;
    }

    return true;
  }

  async updateUserProfileById(
    id: ObjectId,
    user: UpdateUserProfileDto,
  ): Promise<any> {
    const isUserExist = await this.isUserExist(id);
    if (isUserExist && isValidObjectId(id)) {
      return await this.userModel.findByIdAndUpdate(id, user, {
        new: true,
        runValidators: true,
      });
    }

    throw new NotFoundException('User not found.');
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username });
  }

  async create(user: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }
}
