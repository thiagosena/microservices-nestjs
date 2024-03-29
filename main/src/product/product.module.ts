import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.model';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
   imports: [
      MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
      ClientsModule.register([
         {
            name: 'PRODUCT_SERVICE',
            transport: Transport.RMQ,
            options: {
               urls: ['amqp://admin:admin@rabbitmq:5672'],
               queue: 'admin_queue',
               queueOptions: {
                  durable: false
               }
            }
         }
      ]),
   ],
   controllers: [ProductController],
   providers: [ProductService]
})
export class ProductModule {
}
