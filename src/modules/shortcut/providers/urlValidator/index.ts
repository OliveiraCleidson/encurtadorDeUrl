import { UrlValidatorIMP } from './imp/urlValidator';
import { UrlValidator } from './model/urlValidator';

const urlValidatorProvider = {
  useClass: UrlValidatorIMP,
  provide: UrlValidator,
};

export default urlValidatorProvider;
