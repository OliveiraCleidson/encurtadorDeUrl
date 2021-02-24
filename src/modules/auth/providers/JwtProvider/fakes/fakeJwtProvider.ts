/* eslint-disable @typescript-eslint/no-unused-vars */
import { JwtProvider } from '../model/jwtProvider';

export class FakeJwtProvider implements JwtProvider {
  generate(payload: any, secret: string, expiresIn?: string | number): string {
    return 'token';
  }
  async verifyOrReject(token: string): Promise<string | any> {
    return {};
  }
}
