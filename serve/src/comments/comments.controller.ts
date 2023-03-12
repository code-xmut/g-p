import { createCommentDto, updateCommentDto } from '@gp/types';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  createComment(@Body() comment: createCommentDto) {
    return this.commentsService.createComment(comment);
  }

  @Get(':id')
  findComments(@Param('id') id: string) {
    return this.commentsService.findCommentById(id);
  }

  @Get('shot/:id')
  findCommentsByShotId(@Param('id') id: string) {
    return this.commentsService.findCommentsByShotId(id);
  }

  @Put(':id')
  updateComment(@Param('id') id: string, @Body() comment: updateCommentDto) {
    return this.commentsService.updateCommentById(id, comment);
  }

  @Delete(':id')
  deleteComment(@Param('id') id: string) {
    return this.commentsService.deleteCommentById(id);
  }
}
