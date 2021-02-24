import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from '../users/services/users.service';
import { UsersModule } from '../users/users.module';
import { AuthController } from './http/controller/auth.controller';
import jwtProvider from './providers';
import { AuthenticateService } from './services/authenticate.service';
import { AuthorizationService } from './services/authorization.service';

@Module({
  imports: [forwardRef(() => UsersModule)],
  controllers: [AuthController],
  providers: [AuthenticateService, AuthorizationService, jwtProvider],
  exports: [AuthorizationService],
})
export class AuthModule {}
