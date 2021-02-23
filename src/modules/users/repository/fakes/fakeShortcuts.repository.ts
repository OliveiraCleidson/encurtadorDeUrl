import { v4 } from 'uuid';
import { CreateUserDTO } from '../../dtos/createUser.dto';
import { UpdateUserDTO } from '../../dtos/updateUser.dto';
import { UserEntity } from '../../entities/user.entity';
import { UsersRepository } from '../users.repository';

export class FakeUsersRepository implements UsersRepository {
  private entities: UserEntity[] = [];

  async findBy(properties: Partial<UserEntity>): Promise<UserEntity> {
    const entity = this.entities.find(search =>
      this.compareEntities(search, properties),
    );

    return entity ? { ...entity } : undefined;
  }

  async create(data: CreateUserDTO): Promise<UserEntity> {
    const entity = {} as UserEntity;
    Object.assign(entity, { ...data, id: v4() });

    this.entities.push(entity);

    return { ...entity };
  }

  async update(id: string, data: UpdateUserDTO): Promise<UserEntity> {
    const entityIndex = this.entities.findIndex(search => search.id === id);

    if (entityIndex < 0) {
      throw new Error('Entidade não encontrada');
    }

    this.entities.splice(
      entityIndex,
      1,
      Object.assign(this.entities[entityIndex], data),
    );

    return { ...this.entities[entityIndex] };
  }

  private compareEntities(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    const sameKeys = keys1.filter(value => keys2.includes(value));

    for (const key of sameKeys) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }

    return true;
  }
}
