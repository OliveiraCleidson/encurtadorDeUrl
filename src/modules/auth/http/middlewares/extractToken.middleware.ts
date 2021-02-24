import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';
import { AuthorizationService } from '../../services/authorization.service';

@Injectable()
export class ExtractTokenMiddleware implements NestMiddleware {
  private logger = new Logger('ExtractTokenMiddleware');
  constructor(private authorizationService: AuthorizationService) {
    this.logger.log('ExtractTokenMiddleware OK');
  }

  async use(req: Request, res, next) {
    await this.valideRequest(req);
    next();
  }

  private async valideRequest(request: Request): Promise<void> {
    const token = this.getToken(request);

    await this.inserDataInRequest(token, request);
  }

  private getToken(request: Request): string {
    const authHeader = request.headers.authorization;

    if (!authHeader || authHeader === '') {
      return;
    }

    const [, token] = authHeader.split(' ');

    this.checkTokenExists(token);

    return token;
  }

  private checkTokenExists(token: string): void {
    if (token === 'undefined' || !token) {
      return;
    }
  }

  private async inserDataInRequest(token: string, request: Request) {
    try {
      const sub = await this.authorizationService.execute(token);

      request.user = sub;
    } catch {
      return;
    }
  }
}
