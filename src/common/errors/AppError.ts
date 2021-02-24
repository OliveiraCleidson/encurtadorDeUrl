export class AppError {
  private stack: string;
  public name = 'AppError';
  constructor(public message: string, public statusCode: number = 400) {
    const error = new Error();
    this.stack = error.stack;
  }
}
