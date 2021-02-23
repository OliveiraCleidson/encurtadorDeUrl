import { HashProvider } from '../model/hashProvider';
import { hash, compare, genSalt } from 'bcrypt';

export class BcryptHashProvider implements HashProvider {
  compareHash(data: string, hashed: string): Promise<boolean> {
    return compare(data, hashed);
  }
  async encrypt(data: string): Promise<string> {
    return hash(data, await genSalt());
  }
}
