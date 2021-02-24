import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AuthenticateService } from '../../services/authenticate.service';
import { SignInRequestDTO } from '../dtos/signInRequest.dto';

@Controller('auth')
export class AuthController {
  constructor(private authenticateService: AuthenticateService) {}

  @ApiOkResponse({
    schema: {
      properties: {
        token: {
          type: 'string',
          example:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI1MzMxNDVkYS0zYjQxLTRjZGItYjA3My0yZDVkMTU2OGU3MGYiLCJuYW1lIjoiT2xpdiIsImVtYWlsIjoib2xzc2l2QGV1LmNvbSJ9LCJpYXQiOjE2MTQxNzkwMjcsImV4cCI6MTYxNDc4MzgyN30.Z62OLIHoZIQUD9PvaGdCJYuxI1by_abKQMvQ41b-U8E',
        },
      },
    },
  })
  @Post()
  async handlePost(@Body() data: SignInRequestDTO) {
    return this.authenticateService.execute(data);
  }
}
