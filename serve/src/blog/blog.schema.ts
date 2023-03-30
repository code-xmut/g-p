import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Blog {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  categories: string[];

  @Prop()
  cover: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  author: string;
}

export type BlogDocument = Blog & Document;
export const BlogSchema = SchemaFactory.createForClass(Blog);
