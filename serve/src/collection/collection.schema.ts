import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Shot } from '@gp/types';
import { ShotDocument } from 'src/shots/shot.schema';

@Schema({
  timestamps: true,
})
export class Collection {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  shots: Shot[];
}
export const CollectionSchema = SchemaFactory.createForClass(Collection);
