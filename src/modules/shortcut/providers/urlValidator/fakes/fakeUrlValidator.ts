import { UrlValidator } from '../model/urlValidator';

export class FakeUrlValidator implements UrlValidator {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  verify(_url: string): Promise<boolean> {
    return Promise.resolve(true);
  }
}
