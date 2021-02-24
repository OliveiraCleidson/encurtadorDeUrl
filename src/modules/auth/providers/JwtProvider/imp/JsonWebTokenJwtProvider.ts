import { JwtProvider } from '../model/jwtProvider';

import { verify, sign } from 'jsonwebtoken';

export class JsonWebTokenJwtProvider implements JwtProvider {
  generate(payload: any, secret: string, expiresIn?: string | number): string {
    return sign(payload, secret, { expiresIn });
  }
  async verifyOrReject(token: string, secret: string): Promise<string | any> {
    return verify(token, secret);
  }
}
