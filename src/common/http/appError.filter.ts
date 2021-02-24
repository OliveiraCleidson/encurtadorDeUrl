import { Catch, ExceptionFilter, ArgumentsHost, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppError } from '../errors/AppError';

@Catch(AppError)
export class AppErrorFilter implements ExceptionFilter {
  private logger = new Logger('AppError');
  catch(exception: AppError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.statusCode;

    this.logger.warn(exception.message);
    this.logger.warn(`Path: ${ctx.getRequest<Request>().url}`);

    response.status(status).json({
      statusCode: status,
      message: exception.message,
    });
  }
}
