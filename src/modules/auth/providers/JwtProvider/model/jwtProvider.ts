export abstract class JwtProvider {
  abstract generate(
    payload: any,
    secret: string,
    expiresIn?: string | number,
  ): string;
  abstract verifyOrReject(token: string, secret: string): Promise<string | any>;
}
