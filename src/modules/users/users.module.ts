import { Module } from '@nestjs/common';
import { UsersController } from './http/controller/users.controller';
import usersRepositoryProvider from './repository/imp';
import { UsersService } from './services/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, usersRepositoryProvider],
  exports: [UsersService],
})
export class UsersModule {}
