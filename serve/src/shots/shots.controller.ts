import { createShotDto, Shot } from '@gp/types';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UpdateShotDto } from './dto/update-shot.dto';
import { ShotsService } from './shots.service';

@Controller('shots')
export class ShotsController {
  constructor(private readonly shotsService: ShotsService) {}

  @Post()
  async create(@Body() shot: createShotDto) {
    return this.shotsService.createShots(shot);
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

  @Post(':id')
  async updateShotById(@Param('id') id: string, @Body() shot: UpdateShotDto) {
    return this.shotsService.updateShotById(id, shot);
  }

  @Put(':id/like')
  async likeShotById(@Param('id') id: string) {
    return this.shotsService.likeShotById(id);
  }

  @Delete(':id')
  async deleteShotById(@Param('id') id: string) {
    return this.shotsService.deleteShotById(id);
  }
}
