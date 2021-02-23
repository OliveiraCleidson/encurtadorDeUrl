export class AppError {
  private stack: string;
  constructor(private message: string, private statusCode: number = 400) {
    const error = new Error();
    this.stack = error.stack;
  }
}
