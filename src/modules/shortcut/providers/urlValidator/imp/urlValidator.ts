import { plainToClass } from 'class-transformer';
import { IsUrl, validate } from 'class-validator';
import { UrlValidator } from '../model/urlValidator';

export class UrlValidatorIMP implements UrlValidator {
  async verify(url: string): Promise<boolean> {
    try {
      const urlClass = plainToClass(Url, { link: url });
      await validate(urlClass);
      return true;
    } catch {
      return false;
    }
  }
}

class Url {
  @IsUrl()
  link: string;
}
