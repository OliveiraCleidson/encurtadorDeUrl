import { HashProvider } from '../model/hashProvider';

export class FakeHashProvider implements HashProvider {
  compareHash(data: string, hash: string): Promise<boolean> {
    return Promise.resolve(data === hash ? true : false);
  }
  encrypt(data: string): Promise<string> {
    return Promise.resolve(data);
  }
}
