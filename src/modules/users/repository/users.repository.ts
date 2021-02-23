import { CreateUserDTO } from '../dtos/createUser.dto';
import { UserEntity } from '../entities/user.entity';

export abstract class UsersRepository {
  abstract findBy(
    properties: Partial<UserEntity>,
  ): Promise<UserEntity | undefined>;
  abstract create(data: CreateUserDTO): Promise<UserEntity>;
}
