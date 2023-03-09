import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShotsService } from './shots.service';
import { CreateShotDto } from './dto/create-shot.dto';
import { UpdateShotDto } from './dto/update-shot.dto';

@Controller('shots')
export class ShotsController {
  constructor(private readonly shotsService: ShotsService) {}

  @Post()
  create(@Body() createShotDto: CreateShotDto) {
    return this.shotsService.create(createShotDto);
  }

  @Get()
  findAll() {
    return this.shotsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shotsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShotDto: UpdateShotDto) {
    return this.shotsService.update(+id, updateShotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shotsService.remove(+id);
  }
}
