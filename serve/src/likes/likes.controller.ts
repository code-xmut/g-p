import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { LikesService } from './likes.service';
import { JwtAuthGuards } from 'src/auth/jwt-auth.guard';

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
    return await this.likesService.findUserLikesWithStatus(userId);
  }

  @Delete(':userId')
  async deleteLikesByUserId(@Param('userId') userId: string) {
    return await this.likesService.deleteLikesByUserId(userId);
  }

  @UseGuards(JwtAuthGuards)
  @Get('shots/page')
  async findShotsWithStatus(
    @Req() req,
    @Query('page') page: number,
    @Query('size') size: number,
    @Query('q') q: string,
    @Query('sort') sort?: string,
    @Query('order') order?: string,
  ) {
    const userId = req.headers.id;
    return await this.likesService.findShotsWithStatus(
      userId,
      page,
      size,
      q,
      sort,
      order,
    );
  }
}
