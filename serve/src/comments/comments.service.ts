import { createCommentDto, updateCommentDto } from '@gp/types';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './comments.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: Model<Comment>,
  ) {}

  async createComment(comment: createCommentDto) {
    const createdComment = new this.commentModel(comment);
    return await createdComment.save();
  }

  async findCommentsByShotId(shotId: string) {
    return await this.commentModel.find({ shotId });
  }

  async findCommentById(id: string) {
    return await this.commentModel.findById(id);
  }

  async updateCommentById(id: string, comment: updateCommentDto) {
    return await this.commentModel.findByIdAndUpdate(id, comment, {
      new: true,
    });
  }

  async deleteCommentById(id: string) {
    return await this.commentModel.findByIdAndDelete(id);
  }
}
