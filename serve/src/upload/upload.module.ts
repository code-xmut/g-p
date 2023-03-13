import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { join } from 'path';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: join(__dirname, '..', 'uploads'),
        filename: (req, file, cb) => {
          const filename: string = file.originalname.split('.')[0];
          const extension: string = file.originalname.split('.')[1];
          return cb(null, `${filename}-${Date.now()}.${extension}`);
        },
      }),
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
