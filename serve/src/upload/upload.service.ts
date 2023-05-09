import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
  // upload file then return the file name
  async uploadFile(file: Express.Multer.File) {
    return `http://43.139.14.24:3000/uploads/${file.filename}`;
  }
}
