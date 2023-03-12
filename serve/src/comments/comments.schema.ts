import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Comment {
  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  user: string;

  @Prop({ required: true })
  shotId: string;

  @Prop({ default: 0 })
  likes: number;

  @Prop({ default: 0 })
  dislikes: number;
}
export const CommentSchema = SchemaFactory.createForClass(Comment);
