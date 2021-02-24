import AppConfig from '@/config/app';
import { UserEntity } from '@/modules/users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { JwtProvider } from '../providers/JwtProvider/model/jwtProvider';

@Injectable()
export class AuthorizationService {
  constructor(private jwtProvider: JwtProvider) {}

  async execute(token: string): Promise<UserEntity> {
    const { sub } = await this.jwtProvider.verifyOrReject(
      token,
      AppConfig.jwtSecret,
    );

    return plainToClass(UserEntity, sub);
  }
}
