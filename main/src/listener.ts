import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Transport} from '@nestjs/microservices';

async function bootstrap() {
   const app = await NestFactory.createMicroservice(
      AppModule,
      {
         transport: Transport.RMQ,
         options: {
            urls: ['amqp://admin:admin@localhost:5672'],
            queue: 'main_queue',
            queueOptions: {
               durable: false
            }
         }
      }
   );
   app.listen(() => console.log('Main is listening'));
}

bootstrap();
