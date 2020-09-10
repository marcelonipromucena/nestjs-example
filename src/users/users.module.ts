import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './shared/user.service';

@Module({
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
