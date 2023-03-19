import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post(':userId/shot/:shotId')
  async addShotToLikes(
    @Param('userId') userId: string,
    @Param('shotId') shotId: string,
  ) {
    return await this.likesService.addShotToLikes(userId, shotId);
  }

  @Delete(':userId/shot/:shotId')
  async removeShotFromLikes(
    @Param('userId') userId: string,
    @Param('shotId') shotId: string,
  ) {
    return await this.likesService.removeShotFromLikes(userId, shotId);
  }

  @Get()
  async findAllLikes() {
    return await this.likesService.findAllLikes();
  }

  @Get(':userId')
  async findLikesByUserId(@Param('userId') userId: string) {
    return await this.likesService.findLikesByUserId(userId);
  }
}
