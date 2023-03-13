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

  @Prop({ default: [] })
  likes: any[]; // Set<string>

  @Prop({ default: [] })
  dislikes: any[];
}
export const CommentSchema = SchemaFactory.createForClass(Comment);
