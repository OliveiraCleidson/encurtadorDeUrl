import { ShortcutGeneratorService } from '../shortcutGenerator.service';

describe('shortcutGenerator.service', () => {
  let sut: ShortcutGeneratorService;

  beforeEach(() => {
    sut = new ShortcutGeneratorService();
  });

  it('should return a string with length greater 5', () => {
    let flag = 0;
    do {
      const result = sut.execute();
      expect(result.length).toBeGreaterThanOrEqual(5);
      flag += 1;
    } while (flag === 10);
  });

  it('should return a string with length less 10 characteres', () => {
    let flag = 0;
    do {
      const result = sut.execute();
      expect(result.length).toBeLessThanOrEqual(10);
      flag += 1;
    } while (flag === 10);
  });

  it('should return a alpha numeric string', () => {
    const result = sut.execute();
    expect(/^[a-z0-9]+$/.test(result)).toEqual(true);
  });

  it('should return a random string', () => {
    let lastResult: string;
    let flag = 0;
    do {
      const result = sut.execute();

      expect(sut.execute()).not.toEqual(result);
      expect(sut.execute()).not.toEqual(lastResult);
      lastResult = result;
      flag += 1;
    } while (flag === 10);
  });
});
