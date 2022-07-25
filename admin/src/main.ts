const tracer = require('./tracer')

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
   await tracer.start();
   const app = await NestFactory.create(AppModule);
   app.setGlobalPrefix('api');
   app.enableCors({
      origin: '*'
   });
   await app.listen(8001);
}

bootstrap();
