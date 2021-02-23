import { BcryptHashProvider } from './imp/BCryptHashProvider';
import { HashProvider } from './model/hashProvider';

const hashProvider = {
  useClass: BcryptHashProvider,
  provide: HashProvider,
};

export default hashProvider;
