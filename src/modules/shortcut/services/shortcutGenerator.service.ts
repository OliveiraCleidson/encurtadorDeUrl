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

  private getRandomString(): string {
    return this.parseInputToAlphaNumeric(v4());
  }

  private createCode(): string {
    const randomString = this.getRandomString();
    const randomString2 = this.getRandomString();

    const part1 = this.getFirstFourCharactersOfAString(randomString);

    const part2 = this.getFirstFourCharactersOfAString(randomString2);

    return `${part1}${part2}`;
  }

  private getFirstFourCharactersOfAString(data: string) {
    return data.substring(0, data.length >= 5 ? 5 : data.length - 1);
  }
}
