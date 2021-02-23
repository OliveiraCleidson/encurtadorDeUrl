import { AppError } from '@/common/errors/AppError';
import { HashProvider } from '@/common/providers/hashProvider/model/hashProvider';
import { Injectable } from '@nestjs/common';

import { CreateUserDTO } from '../dtos/createUser.dto';
import { UserEntity } from '../entities/user.entity';
import { UsersRepository } from '../repository/users.repository';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private hashProvider: HashProvider,
  ) {}
  async create(data: CreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findBy({
      email: data.email,
    });

    if (userAlreadyExists) {
      throw new AppError('Este e-mail já está em uso.');
    }

    return this.usersRepository.create({
      ...data,
      email: data.email.toLowerCase(),
      password: await this.hashProvider.encrypt(data.password),
    });
  }

  async findByEmail(email: string): Promise<UserEntity> {
    const user = await this.usersRepository.findBy({ email: email });

    if (!user) {
      throw new AppError('Usuário não encontrado');
    }

    return user;
  }
}
