import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { CartService } from '../cart/cart.service';
import { Cart, CartSchema } from '../cart/schemas/cart.schema';

@Module({
  providers: [ProductsService, CartService],
  controllers: [ProductsController],
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Cart.name, schema: CartSchema },
    ]),
  ],
})
export class ProductsModule {
}
