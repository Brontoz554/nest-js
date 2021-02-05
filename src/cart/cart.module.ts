import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from './schemas/cart.schema';
import { User, UserSchema } from '../user/schemas/user.schema';
import { UserService } from '../user/user.service';

@Module({
  providers: [CartService, UserService],
  controllers: [CartController],
  imports: [
    MongooseModule.forFeature([
      { name: Cart.name, schema: CartSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
})
export class CartModule {}
