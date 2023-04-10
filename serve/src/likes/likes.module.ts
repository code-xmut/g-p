import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { Likes, LikesSchema } from './likes.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ShotsModule } from 'src/shots/shots.module';
import { CollectionModule } from 'src/collection/collection.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Likes.name, schema: LikesSchema }]),
    ShotsModule,
    CollectionModule,
  ],
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
