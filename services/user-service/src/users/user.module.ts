import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/user.schema";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        ClientsModule.register([
            {
              name: 'RABBITMQ_SERVICE',
              transport: Transport.RMQ,
              options: {
                urls: process.env.RABBITMQ_URL ? [process.env.RABBITMQ_URL] : ['amqp://guest:guest@localhost:5672'],
                queue: 'main_queue',
                queueOptions: {
                  durable: false,
                },
              },
            },
          ]),
    ],
    controllers: [UserController],
    providers: [UserService],
})

export class UserModule {}