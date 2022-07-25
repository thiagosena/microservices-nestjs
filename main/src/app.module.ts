import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URL } from './environments';
import { ProductModule } from './product/product.module';

@Module({
   imports: [
      MongooseModule.forRoot(MONGO_URL, {
         autoCreate: true
      }),
      ProductModule
   ]
})
export class AppModule {
}
