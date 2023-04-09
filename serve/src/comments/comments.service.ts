import { createCommentDto, updateCommentDto } from '@gp/types';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ShotsService } from 'src/shots/shots.service';
import { Comment } from './comments.schema';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: Model<Comment>,
    private readonly shotsService: ShotsService,
    private readonly userService: UsersService,
  ) {}

  async createComment(comment: createCommentDto) {
    const createdComment = new this.commentModel(comment);
    const shot = await this.shotsService.findShotById(comment.shotId);
    if (!shot) {
      throw new Notification('Shot not found');
    }
    this.shotsService.addCommentToShot(comment.shotId, createdComment);
    return await createdComment.save();
  }

  async findCommentsByShotId(shotId: string) {
    const comments = await this.commentModel.find({ shotId });

    if (!comments) {
      throw new NotFoundException('Comments not found');
    }

    // 遍历评论，将评论的作者信息添加到评论中
    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      const user = await this.userService.findUserById(comment.user.toString());
      comment.user = JSON.stringify(user);
    }

    return comments;
  }

  async findCommentById(id: string) {
    return await this.commentModel.findById(id);
  }

  async updateCommentById(id: string, comment: updateCommentDto) {
    return await this.commentModel.findByIdAndUpdate(id, comment, {
      new: true,
    });
  }

  async likeCommentById(id: string, userId: string) {
    return await this.commentModel.findByIdAndUpdate(id, {
      $addToSet: { likes: userId },
      $inc: { likesCount: 1 },
    });
  }

  async dislikeCommentById(id: string, userId: string) {
    return await this.commentModel.findByIdAndUpdate(id, {
      $addToSet: { dislikes: userId },
      $inc: { dislikesCount: 1 },
    });
  }

  async deleteCommentById(id: string) {
    return await this.commentModel.findByIdAndDelete(id);
  }
}
