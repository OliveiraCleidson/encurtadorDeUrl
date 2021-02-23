export abstract class HashProvider {
  abstract compareHash(data: string, hash: string): Promise<boolean>;
  abstract encrypt(data: string): Promise<string>;
}
