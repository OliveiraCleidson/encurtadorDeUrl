import { UsersRepositoryIMP } from './imp/users.repository';
import { UsersRepository } from './users.repository';

const usersRepositoryProvider = {
  useClass: UsersRepositoryIMP,
  provide: UsersRepository,
};

export default usersRepositoryProvider;
