import { Controller, Get } from '@nestjs/common';
import { ShotsService } from './shots.service';

@Controller('shots')
export class ShotsController {
  constructor(private readonly shotsService: ShotsService) {}

  @Get()
  async findAll() {
    return this.shotsService.findAll();
  }
}
