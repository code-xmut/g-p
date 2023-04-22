import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model, ObjectId } from 'mongoose';
import type { CreateUserDto, UpdateUserProfileDto } from '@gp/types';
import { User } from './schemas/user.schema';
import { UserInfo } from '@gp/types/user';

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
      return false;
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
    return await this.userModel.findOne({ username });
  }

  async findUserById(id: string) {
    const user = await this.userModel.findOne({ _id: id });
    if (user) {
      const { password, likes, collections, shots, ...userInfo } =
        user.toObject();
      return userInfo;
    }

    throw new NotFoundException('User not found.');
  }

  async findUserInfoByUsername(
    username: string,
  ): Promise<UserInfo | undefined> {
    const user = await this.userModel.findOne({ username });
    if (user) {
      const { password, ...userInfo } = user.toObject();
      return userInfo;
    }

    throw new NotFoundException('User not found.');
  }

  async findUsersByNameTotal(name: string): Promise<number> {
    return await this.userModel
      .find({
        $or: [
          { name: { $regex: name, $options: 'i' } },
          { email: { $regex: name, $options: 'i' } },
        ],
      })
      .countDocuments();
  }

  async findUsersByName(
    name: string,
    page = 1,
    size = 6,
  ): Promise<UserInfo | undefined> {
    const users = await this.userModel
      .find({
        $or: [
          { name: { $regex: name, $options: 'i' } },
          { email: { $regex: name, $options: 'i' } },
        ],
      })
      .skip((page - 1) * size)
      .limit(size)
      .then((users) => users.map((user) => user.toObject()));

    if (users) {
      const returnUsers = users.map((user) => {
        const { password, likes, collections, shots, ...userInfo } = user;
        return userInfo;
      });

      const total = await this.findUsersByNameTotal(name);
      const hasNext = page * size < total;

      return {
        users: returnUsers,
        hasNext,
        total,
      };
    }

    throw new NotFoundException('User not found.');
  }

  async create(user: CreateUserDto): Promise<User> {
    const isUserNameAvailable = await this.isUserNameValid(user.username);

    if (isUserNameAvailable) {
      return await this.userModel.create(user);
    }

    throw new NotFoundException('Username already exists.');
  }

  async updatePassword(
    PasswordInfo: { oldPassword: string; newPassword: string },
    UserId: string,
  ) {
    const user = await this.userModel.findById(UserId);
    if (user && user.password === PasswordInfo.oldPassword) {
      user.password = PasswordInfo.newPassword;
      await user.save();
      return true;
    }

    return false;
  }

  async deleteUserById(id: string) {
    return await this.userModel.findOneAndDelete({ _id: id });
  }
}
