import { Module } from '@nestjs/common';
import { ShotsService } from './shots.service';
import { ShotsController } from './shots.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Shot, ShotSchema } from './shot.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Shot.name, schema: ShotSchema }]),
  ],
  controllers: [ShotsController],
  providers: [ShotsService],
})
export class ShotsModule {}
