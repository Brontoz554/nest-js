import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Cart } from '../../cart/schemas/cart.schema';

@Schema()
export class User {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  secondName: string;

  @Prop({ type: String, required: true, unique: true })
  phone: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }]})
  cart: Cart[];
}

export const UserSchema = SchemaFactory.createForClass(User);
