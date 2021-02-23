import { AppError } from '@/common/errors/AppError';
import { FakeHashProvider } from '@/common/providers/hashProvider/fakes/fakeHashProvider';
import { HashProvider } from '@/common/providers/hashProvider/model/hashProvider';
import { CreateUserDTO } from '../../dtos/createUser.dto';
import { FakeUsersRepository } from '../../repository/fakes/fakeShortcuts.repository';
import { UsersRepository } from '../../repository/users.repository';
import { UsersService } from '../users.service';

describe('users.service', () => {
  let sut: UsersService;
  let usersRepository: UsersRepository;
  let hashProvider: HashProvider;
  let createData: CreateUserDTO;
  beforeEach(() => {
    usersRepository = new FakeUsersRepository();
    hashProvider = new FakeHashProvider();
    sut = new UsersService(usersRepository, hashProvider);
    createData = {
      email: 'john@doe.com',
      name: 'John Doe',
      password: 'wiseUpAMelhor',
    };
  });
  it('should call repository to verify already user', async () => {
    const spyRepository = jest.spyOn(usersRepository, 'findBy');
    await sut.create(createData);

    expect(spyRepository).toHaveBeenCalled();
  });

  it('should call repository to create a user', async () => {
    const spyRepository = jest.spyOn(usersRepository, 'create');
    await sut.create(createData);

    expect(spyRepository).toHaveBeenCalled();
  });

  it('should call hashProvider to hash password', async () => {
    const spyHash = jest.spyOn(hashProvider, 'encrypt');
    await sut.create(createData);

    expect(spyHash).toHaveBeenCalled();
  });

  it('should not create a user if email already in use', async () => {
    await sut.create(createData);

    expect(sut.create(createData)).rejects.toBeInstanceOf(AppError);
  });

  it('should transform email in lowercase', async () => {
    expect(
      sut.create({ ...createData, email: 'lOwEr@CaSe.COM' }),
    ).resolves.toMatchObject({ email: 'lower@case.com' });
  });
});
