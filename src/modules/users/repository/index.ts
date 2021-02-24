import { UsersRepositoryIMP } from './imp/shortcuts.repository';
import { UsersRepository } from './users.repository';

const usersRepositoryProvider = {
  useClass: UsersRepositoryIMP,
  provide: UsersRepository,
};

export default usersRepositoryProvider;
