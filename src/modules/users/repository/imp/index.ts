import { UsersRepository } from '../users.repository';
import { UsersRepositoryIMP } from './users.repository';

const usersRepositoryProvider = {
  useClass: UsersRepositoryIMP,
  provide: UsersRepository,
};

export default usersRepositoryProvider;
