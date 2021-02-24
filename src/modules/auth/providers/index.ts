import { JsonWebTokenJwtProvider } from './JwtProvider/imp/JsonWebTokenJwtProvider';
import { JwtProvider } from './JwtProvider/model/jwtProvider';

const jwtProvider = {
  useClass: JsonWebTokenJwtProvider,
  provide: JwtProvider,
};

export default jwtProvider;
