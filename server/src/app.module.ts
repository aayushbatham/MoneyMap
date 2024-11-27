import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ExpensesModule } from './expenses/expenses.module';
import { CatagoriesModule } from './catagories/catagories.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://aayush:12345@cluster0.5awncku.mongodb.net/MoneyMap?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UsersModule,
    ExpensesModule,
    CatagoriesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
