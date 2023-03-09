import { Test, TestingModule } from '@nestjs/testing';
import { ShotsController } from './shots.controller';
import { ShotsService } from './shots.service';

describe('ShotsController', () => {
  let controller: ShotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShotsController],
      providers: [ShotsService],
    }).compile();

    controller = module.get<ShotsController>(ShotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
