import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Shot {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  tags: string[];

  @Prop({ required: true })
  cover: string;

  @Prop()
  content: string;

  @Prop()
  user: string;

  @Prop()
  serverUrl: string;

  @Prop()
  likes: number;

  @Prop()
  shares: number;

  @Prop()
  collections: number;

  @Prop()
  comments: string[];
}
export type ShotDocument = Shot & Document;
export const ShotSchema = SchemaFactory.createForClass(Shot);
