import { subDays } from 'date-fns';
import { ShortcutEntity } from '../../entities/shortcut.entity';
import { IsShortcutExpiredService } from '../isShortcutExpired.service';

describe('isShortcutExpired.service', () => {
  let sut: IsShortcutExpiredService;
  let shortcut = {
    createdAt: new Date(),
  } as ShortcutEntity;
  beforeEach(() => {
    sut = new IsShortcutExpiredService();
  });
  it('should return false if shortcut not expired', () => {
    expect(sut.execute(shortcut)).toEqual(false);
  });

  it('should return true if shortcut expired', () => {
    shortcut = {
      createdAt: subDays(new Date(), 7),
    } as ShortcutEntity;
    expect(sut.execute(shortcut)).toEqual(true);
  });
});
