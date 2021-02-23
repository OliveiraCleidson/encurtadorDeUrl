import { UsersRepository } from '../users.repository';
import { UsersRepositoryIMP } from './shortcuts.repository';

const usersRepositoryProvider = {
  useClass: UsersRepositoryIMP,
  provide: UsersRepository,
};

export default usersRepositoryProvider;
