"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqp://admin:admin@rabbitmq:5672'],
            queue: 'admin_queue',
            queueOptions: {
                durable: false
            }
        }
    });
    app.listen(() => console.log('Admin is listening'));
}
bootstrap();
//# sourceMappingURL=listener.js.map