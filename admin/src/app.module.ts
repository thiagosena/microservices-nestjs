import {Module} from '@nestjs/common';
import {ProductModule} from './product/product.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TypeOrmService} from './config/typeorm';

@Module({
   imports: [
      TypeOrmModule.forRootAsync({
         useClass: TypeOrmService
      }),
      ProductModule
   ]
})
export class AppModule {
}
