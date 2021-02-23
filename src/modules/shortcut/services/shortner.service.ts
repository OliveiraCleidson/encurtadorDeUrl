import { AppError } from '@/common/errors/AppError';
import { Injectable } from '@nestjs/common';
import { CreateShortcutDTO } from '../dtos/createShortcut.dto';
import { ShortcutEntity } from '../entities/shortcut.entity';
import { UrlValidator } from '../providers/urlValidator/model/urlValidator';
import { ShortcutsRepository } from '../repositories/shortcuts.repository';
import { ShortcutGeneratorService } from './shortcutGenerator.service';

@Injectable()
export class ShortnerService {
  constructor(
    private urlValidator: UrlValidator,
    private shortcutGenerator: ShortcutGeneratorService,
    private shortcutRepository: ShortcutsRepository,
  ) {}

  async execute(
    { baseLink }: CreateShortcutDTO,
    userId?: string,
  ): Promise<ShortcutEntity> {
    await this.verifyBaseLink(baseLink);
    let code: string;
    let codeAlreadyInUse;
    do {
      code = this.shortcutGenerator.execute();
      codeAlreadyInUse = await this.shortcutRepository.findBy({ code });
    } while (!!codeAlreadyInUse);

    const shortcut = await this.shortcutRepository.create(
      { baseLink, userId },
      code,
    );

    return shortcut;
  }

  private async verifyBaseLink(baselink: string): Promise<void> {
    const isValidLink = await this.urlValidator.verify(baselink);

    if (!isValidLink) {
      throw new AppError('O URL inserido é inválido');
    }
  }
}
