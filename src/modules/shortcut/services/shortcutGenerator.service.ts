import { Injectable } from '@nestjs/common';

@Injectable()
export class ShortcutGeneratorService {
  execute(): string {
    return 'a';
  }
}
