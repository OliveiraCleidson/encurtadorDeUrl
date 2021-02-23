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

    const part1 = this.getRandomSubstringLength(randomString);

    const part2 = this.getRandomSubstringLength(randomString2);

    const sumOfParts = part1.length + part2.length;
    const parsedCode = `${part1}${part2}`.substring(
      0,
      sumOfParts >= 10 ? 10 : sumOfParts,
    );
    return parsedCode;
  }

  private getRandomSubstringLength(data: string) {
    return data.substring(0, Math.floor(Math.random() * 5) + 3);
  }
}
