import { Module } from '@nestjs/common';
import { ShotsService } from './shots.service';
import { ShotsController } from './shots.controller';

@Module({
  controllers: [ShotsController],
  providers: [ShotsService],
})
export class ShotsModule {}
