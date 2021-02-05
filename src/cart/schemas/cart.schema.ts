import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Product } from '../../products/schemas/product.schema';

@Schema()
export class Cart {
  @Prop()
  user: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  product: Product;

  @Prop()
  count: number;

  @Prop()
  price: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
