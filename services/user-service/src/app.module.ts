import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || ''),
    UserModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
