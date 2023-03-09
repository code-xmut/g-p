import { PartialType } from '@nestjs/swagger';
import { CreateShotDto } from './create-shot.dto';

export class UpdateShotDto extends PartialType(CreateShotDto) {}
