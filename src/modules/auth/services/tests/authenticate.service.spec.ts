import { AppError } from '@/common/errors/AppError';
import { FakeHashProvider } from '@/common/providers/hashProvider/fakes/fakeHashProvider';
import { HashProvider } from '@/common/providers/hashProvider/model/hashProvider';
import { UserEntity } from '@/modules/users/entities/user.entity';
import { UsersService } from '@/modules/users/services/users.service';
import { SignInDTO } from '../../dtos/signIn.dto';
import jwtProvider from '../../providers';
import { FakeJwtProvider } from '../../providers/JwtProvider/fakes/fakeJwtProvider';
import { JwtProvider } from '../../providers/JwtProvider/model/jwtProvider';
import { AuthenticateService } from '../authenticate.service';

describe('authenticate.service', () => {
  let sut: AuthenticateService;
  let usersService: UsersService;
  let hashProvider: HashProvider;
  let jwtProvider: JwtProvider;
  let signInData: SignInDTO;
  beforeEach(() => {
    usersService = ({
      findByEmail: jest.fn(() =>
        Promise.resolve({
          email: 'john@doe.com',
          password: 'wiseUpTheBest',
        } as UserEntity),
      ),
    } as unknown) as UsersService;

    signInData = {
      email: 'john@doe.com',
      password: 'wiseUpTheBest',
    };

    hashProvider = new FakeHashProvider();
    jwtProvider = new FakeJwtProvider();
    sut = new AuthenticateService(usersService, hashProvider, jwtProvider);
  });
  it('should call findByEmail', async () => {
    const spyFindByEmail = jest.spyOn(usersService, 'findByEmail');
    await sut.execute(signInData);
    expect(spyFindByEmail).toHaveBeenCalled();
  });

  it('should throw error if not find user', async () => {
    jest
      .spyOn(usersService, 'findByEmail')
      .mockReturnValueOnce(
        Promise.reject(new AppError('Usuário não encontrado')),
      );

    expect(sut.execute(signInData)).rejects.toBeInstanceOf(AppError);
  });

  it('should call hashProvider to compare password', async () => {
    const spyCompareHash = jest.spyOn(hashProvider, 'compareHash');
    await sut.execute(signInData);
    expect(spyCompareHash).toHaveBeenCalled();
  });

  it('should throw error if password not match', async () => {
    jest
      .spyOn(hashProvider, 'compareHash')
      .mockReturnValueOnce(Promise.resolve(false));

    expect(sut.execute(signInData)).rejects.toBeInstanceOf(AppError);
  });

  it('should return a token', async () => {
    expect(sut.execute(signInData)).resolves.toHaveProperty('token');
  });
});
