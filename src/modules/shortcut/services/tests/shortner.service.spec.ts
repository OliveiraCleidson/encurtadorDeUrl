import { AppError } from '@/common/errors/AppError';
import { CreateShortcutDTO } from '../../dtos/createShortcut.dto';
import { ShortcutEntity } from '../../entities/shortcut.entity';
import { FakeUrlValidator } from '../../providers/urlValidator/fakes/fakeUrlValidator';
import { UrlValidator } from '../../providers/urlValidator/model/urlValidator';
import { FakeShortcutsRepository } from '../../repositories/fakes/fakeShortcuts.repository';
import { ShortcutsRepository } from '../../repositories/shortcuts.repository';
import { ShortcutGeneratorService } from '../shortcutGenerator.service';
import { ShortnerService } from '../shortner.service';

describe('shortner.service', () => {
  let sut: ShortnerService;
  let urlValidator: UrlValidator;
  let data: CreateShortcutDTO;
  let shortcutGenerator: ShortcutGeneratorService;
  let shortcutsRepository: ShortcutsRepository;
  beforeEach(() => {
    shortcutGenerator = ({
      execute: jest.fn(() => Promise.resolve('shortcut')),
    } as unknown) as ShortcutGeneratorService;
    shortcutsRepository = new FakeShortcutsRepository();
    urlValidator = new FakeUrlValidator();
    sut = new ShortnerService(
      urlValidator,
      shortcutGenerator,
      shortcutsRepository,
    );
    data = { baseLink: 'https://wiseup.com/' };
  });
  it('should call validate url', async () => {
    const spyVerify = jest.spyOn(urlValidator, 'verify');
    await sut.execute(data);

    expect(spyVerify).toHaveBeenCalled();
  });

  it('must be throw error if url is invalid', async () => {
    urlValidator = {
      verify: jest.fn(() => Promise.resolve(false)),
    } as UrlValidator;

    const sut = new ShortnerService(
      urlValidator,
      shortcutGenerator,
      shortcutsRepository,
    );

    await expect(sut.execute(data)).rejects.toBeInstanceOf(AppError);
  });

  it('should call the shortcutGenerator', async () => {
    const spyExecute = jest.spyOn(shortcutGenerator, 'execute');
    await sut.execute(data);

    expect(spyExecute).toHaveBeenCalled();
  });

  it('should call the repository', async () => {
    const spyRepository = jest.spyOn(shortcutsRepository, 'findBy');
    await sut.execute(data);

    expect(spyRepository).toHaveBeenCalled();
  });

  it('should generate new code, if the first already in use', async () => {
    jest
      .spyOn(shortcutsRepository, 'findBy')
      .mockReturnValueOnce(Promise.resolve({} as ShortcutEntity));
    const spyExecute = jest.spyOn(shortcutGenerator, 'execute');
    await sut.execute(data);

    expect(spyExecute).toBeCalledTimes(2);
  });
});
