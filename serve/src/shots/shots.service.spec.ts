import { Test, TestingModule } from '@nestjs/testing';
import { ShotsService } from './shots.service';

describe('ShotsService', () => {
  let service: ShotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShotsService],
    }).compile();

    service = module.get<ShotsService>(ShotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
