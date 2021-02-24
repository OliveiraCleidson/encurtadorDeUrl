import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticateService } from '../../services/authenticate.service';
import { SignInRequestDTO } from '../dtos/signInRequest.dto';

@Controller('auth')
export class AuthController {
  constructor(private authenticateService: AuthenticateService) {}

  @Post()
  async handlePost(@Body() data: SignInRequestDTO) {
    return this.authenticateService.execute(data);
  }
}
