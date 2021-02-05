import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { CartService } from '../cart/cart.service';
import { Cart, CartSchema } from '../cart/schemas/cart.schema';

@Module({
  providers: [UserService, CartService],
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Cart.name, schema: CartSchema },
    ]),
  ],
})
export class UserModule {
}
