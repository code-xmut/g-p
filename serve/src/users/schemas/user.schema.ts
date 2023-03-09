import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  bio: string;

  @Prop()
  location: string;

  @Prop()
  avatar: string;

  @Prop()
  password: string;

  @Prop()
  likes: ObjectId[];

  @Prop()
  collections: ObjectId[];

  @Prop()
  shots: ObjectId[];
}
export const UserSchema = SchemaFactory.createForClass(User);
