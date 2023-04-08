import { Shot } from '@gp/types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Likes {
  @Prop({ required: true })
  userId: string;

  @Prop()
  shots: Shot[];
}
export type LikesDocument = Likes & Document;
export const LikesSchema = SchemaFactory.createForClass(Likes);
