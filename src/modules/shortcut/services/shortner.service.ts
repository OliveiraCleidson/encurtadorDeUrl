import { AppError } from '@/common/errors/AppError';
import { Injectable } from '@nestjs/common';
import { UrlValidator } from '../providers/urlValidator/model/urlValidator';
import { ShortcutsRepository } from '../repositories/shortcuts.repository';
import { FindShortcutByCodeService } from './findShortcutByCode.service';
import { ShortcutGeneratorService } from './shortcutGenerator.service';

@Injectable()
export class ShortnerService {
  constructor(
    private urlValidator: UrlValidator,
    private shortcutGenerator: ShortcutGeneratorService,
    private shortcutRepository: ShortcutsRepository,
  ) {}

  async execute(baselink: string): Promise<string> {
    await this.verifyBaseLink(baselink);
    let code: string;
    let codeAlreadyInUse;
    do {
      code = this.shortcutGenerator.execute();
      codeAlreadyInUse = await this.shortcutRepository.findBy({ code });
    } while (!!codeAlreadyInUse);

    return code;
  }

  private async verifyBaseLink(baselink: string): Promise<void> {
    const isValidLink = await this.urlValidator.verify(baselink);

    if (!isValidLink) {
      throw new AppError('O URL inserido é inválido');
    }
  }
}
