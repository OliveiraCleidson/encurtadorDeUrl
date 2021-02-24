import { AppError } from '@/common/errors/AppError';
import { classToClass } from 'class-transformer';

import { getRepository, Repository } from 'typeorm';
import { CreateUserDTO } from '../../dtos/createUser.dto';
import { UpdateUserDTO } from '../../dtos/updateUser.dto';
import { UserEntityIMP } from '../../entities/imp/user.entity';
import { UserEntity } from '../../entities/user.entity';
import { UsersRepository } from '../users.repository';

export class UsersRepositoryIMP implements UsersRepository {
  private repository: Repository<UserEntityIMP>;
  constructor() {
    this.repository = getRepository(UserEntityIMP);
  }
  findBy(properties: Partial<UserEntity>): Promise<UserEntity> {
    const entity = this.repository.findOne({ where: { ...properties } });

    return entity;
  }
  create(data: CreateUserDTO): Promise<UserEntity> {
    const entity = this.repository.save(this.repository.create({ ...data }));

    return classToClass(entity);
  }
  async update(id: string, data: UpdateUserDTO): Promise<UserEntity> {
    const entity = await this.repository.findOne(id);

    if (!entity) {
      throw new AppError('Usuário não encontrado');
    }

    return this.repository.save(Object.assign(entity, data));
  }
  async remove(id: string): Promise<boolean> {
    const entity = await this.repository.findOne(id);

    if (!entity) {
      throw new AppError('Usuário não encontrado');
    }

    await this.repository.remove(entity);

    return;
  }
}
