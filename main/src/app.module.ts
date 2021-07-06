import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {ProductModule} from './product/product.module';

@Module({
   imports: [
      MongooseModule.forRoot('mongodb://nestjs:nestjs@mongodb:27017/nestjs_main', {
         autoCreate: true
      }),
      ProductModule
   ]
})
export class AppModule {
}
