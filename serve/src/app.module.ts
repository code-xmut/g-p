import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ShotsModule } from './shots/shots.module';
import { CommentsModule } from './comments/comments.module';
import { UploadModule } from './upload/upload.module';
import { TagsModule } from './tags/tags.module';
import { CollectionModule } from './collection/collection.module';
import { LikesModule } from './likes/likes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UsersModule,
    ShotsModule,
    AuthModule,
    CommentsModule,
    UploadModule,
    TagsModule,
    CollectionModule,
    LikesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
