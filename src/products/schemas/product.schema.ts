import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ type: String, required: true, unique: true })
  title: string;

  @Prop({ type: Number, required: true })
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
