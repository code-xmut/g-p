import { Module } from '@nestjs/common';
import { ShotsService } from './shots.service';
import { ShotsController } from './shots.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Shot, ShotSchema } from './shot.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Shot.name, schema: ShotSchema }]),
  ],
  controllers: [ShotsController],
  providers: [ShotsService],
  exports: [ShotsService],
})
export class ShotsModule {}
