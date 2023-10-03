import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    UsersModule, 
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.mongodb_url),
    BooksModule,
    TransactionModule,
  ],
})
export class AppModule {}
