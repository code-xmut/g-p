import { Injectable } from '@nestjs/common';
import { CreateShotDto } from './dto/create-shot.dto';
import { UpdateShotDto } from './dto/update-shot.dto';

@Injectable()
export class ShotsService {
  create(createShotDto: CreateShotDto) {
    return 'This action adds a new shot';
  }

  findAll() {
    return `This action returns all shots`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shot`;
  }

  update(id: number, updateShotDto: UpdateShotDto) {
    return `This action updates a #${id} shot`;
  }

  remove(id: number) {
    return `This action removes a #${id} shot`;
  }
}
