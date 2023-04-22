import { createShotDto, Shot, ShotDraft, updateShotDto } from '@gp/types';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { ShotsService } from './shots.service';

@Controller('shots')
export class ShotsController {
  constructor(private readonly shotsService: ShotsService) {}

  @Post()
  async create(@Body() shot: createShotDto) {
    return this.shotsService.createShots(shot);
  }

  @Post('draft')
  async createDraft(@Body() shot: ShotDraft) {
    return this.shotsService.createShotDraft(shot);
  }

  @Get()
  async findAll() {
    return this.shotsService.findAll();
  }

  @Get('page')
  async findPage(
    @Query('page') page: number,
    @Query('size') size: number,
    @Query('sort') sort?: string,
    @Query('order') order?: string,
  ) {
    return this.shotsService.findPage(page, size, sort, order);
  }

  @Get(':id')
  async findShotById(@Param('id') id: string) {
    return this.shotsService.findShotById(id);
  }

  @Get('tag/:tag')
  async findShotByTag(@Param('tag') tag: string) {
    return this.shotsService.findShotByTag(tag);
  }

  @Get('search/:pattern')
  async shotFuseSearch(@Param('pattern') pattern: string) {
    return this.shotsService.shotFuseSearch(pattern);
  }

  @Get('sort/createAt')
  async findShotsAndSortByCreatedAt() {
    return this.shotsService.findShotsAndDescByCreatedAt();
  }

  @Get('sort/createAt/asc')
  async findShotsAndSortAscByCreatedAt() {
    return this.shotsService.findShotsAndSortAscByCreatedAt();
  }

  @Get('sort/likes')
  async findShotsAndSortByLikes() {
    return this.shotsService.findShotsAndSortDescByLikes();
  }

  @Get('sort/likes/asc')
  async findShotsAndSortAscByLikes() {
    return this.shotsService.findShotsAndSorAscByLikes();
  }

  @Post(':id')
  async updateShotById(@Param('id') id: string, @Body() shot: updateShotDto) {
    return this.shotsService.updateShotById(id, shot);
  }

  @Put(':id/like')
  async likeShotById(@Param('id') id: string) {
    return this.shotsService.likeShotById(id);
  }

  @Put(':id/unlike')
  async unlikeShotById(@Param('id') id: string) {
    return this.shotsService.unlikeShotById(id);
  }

  @Delete(':id')
  async deleteShotById(@Param('id') id: string) {
    return this.shotsService.deleteShotById(id);
  }

  @Get('user/:username')
  async findShotsByUserId(@Param('username') UserName: string) {
    return this.shotsService.findShotsByUserName(UserName);
  }
}
