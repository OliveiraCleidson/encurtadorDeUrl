import { Controller, Post, Body } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { UserEntityIMP } from '../../entities/imp/user.entity';
import { UsersService } from '../../services/users.service';
import { CreateUserRequestDTO } from '../dtos/createUserRequest.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOkResponse({ type: UserEntityIMP })
  @Post()
  create(@Body() createUserDto: CreateUserRequestDTO) {
    return this.usersService.create(createUserDto);
  }
}
