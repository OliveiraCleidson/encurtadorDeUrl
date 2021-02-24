import { AppError } from '@/common/errors/AppError';
import { HashProvider } from '@/common/providers/hashProvider/model/hashProvider';
import AppConfig from '@/config/app';
import { UsersService } from '@/modules/users/services/users.service';
import { Injectable } from '@nestjs/common';
import { SignInDTO } from '../dtos/signIn.dto';
import { JwtProvider } from '../providers/JwtProvider/model/jwtProvider';

@Injectable()
export class AuthenticateService {
  constructor(
    private readonly usersService: UsersService,
    private readonly hashProvider: HashProvider,
    private readonly jwtProvider: JwtProvider,
  ) {}

  async execute({ email, password }: SignInDTO): Promise<{ token: string }> {
    try {
      const user = await this.usersService.findByEmail(email);

      const isValid = await this.hashProvider.compareHash(
        password,
        user.password,
      );

      if (!isValid) {
        throw new Error();
      }

      delete user.password;
      const token = this.jwtProvider.generate(user, AppConfig.jwtSecret);

      return { token };
    } catch (err) {
      console.log(err);
      throw new AppError('Usuário ou senha inválidos!');
    }
  }
}
