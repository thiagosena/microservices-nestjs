import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ProductModule} from './product/product.module';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
   imports: [
      TypeOrmModule.forRoot({
         type: 'postgres',
         host: 'postgres',
         port: 5432,
         username: 'postgres',
         password: 'admin',
         database: 'nestjs',
         autoLoadEntities: true,
         synchronize: true
      }),
      ProductModule
   ],
   controllers: [AppController],
   providers: [AppService]
})
export class AppModule {
}
