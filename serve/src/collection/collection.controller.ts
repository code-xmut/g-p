import { createCollectionDto, updateCollectionDto } from '@gp/types';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { CollectionService } from './collection.service';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Post()
  async createCollection(@Body() collection: createCollectionDto) {
    return await this.collectionService.createCollection(collection);
  }

  @Get()
  async findAll() {
    return await this.collectionService.findAll();
  }

  @Get(':id')
  async findCollectionById(@Param('id') id: string) {
    return await this.collectionService.findCollectionById(id);
  }

  @Get('exist/:shotId')
  async findCollectionByShotId(@Req() req, @Param('shotId') shotId: string) {
    const userId = req.headers.id;
    return await this.collectionService.shotExistCollections(userId, shotId);
  }

  @Get('user/:userId')
  async findCollectionByUserId(@Param('userId') userId: string) {
    return await this.collectionService.findCollectionByUserId(userId);
  }

  @Put(':id')
  async updateCollectionById(
    @Param('id') id: string,
    @Body() collection: updateCollectionDto,
  ) {
    return await this.collectionService.updateCollectionById(id, collection);
  }

  @Delete(':id')
  async deleteCollectionById(@Param('id') id: string) {
    return await this.collectionService.deleteCollectionById(id);
  }

  @Put(':collectionId/shot/:shotId')
  async addShotToCollection(
    @Param('collectionId') collectionId: string,
    @Param('shotId') shotId: string,
  ) {
    return await this.collectionService.addShotToCollection(
      collectionId,
      shotId,
    );
  }

  @Delete(':collectionId/shot/:shotId')
  async removeShotFromCollection(
    @Param('collectionId') collectionId: string,
    @Param('shotId') shotId: string,
  ) {
    return await this.collectionService.removeShotFromCollection(
      collectionId,
      shotId,
    );
  }
}
