import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

@Injectable()
export class ShortcutGeneratorService {
  execute(): string {
    const code = this.createCode();

    return code;
  }

  private parseInputToAlphaNumeric(data: string): string {
    return data.replace(/\W/g, '');
  }

  private createCode(): string {
    const randomString = this.parseInputToAlphaNumeric(v4());
    const randomString2 = this.parseInputToAlphaNumeric(v4());

    const part1 = this.getFirstTeenCharacterOfAString(randomString);

    const part2 = this.getFirstTeenCharacterOfAString(randomString2);

    return `${part1}${part2}`;
  }

  private getFirstTeenCharacterOfAString(data: string) {
    return data.substring(0, data.length >= 5 ? 5 : data.length - 1);
  }
}
