import { AppError } from '@/common/errors/AppError';
import { Injectable } from '@nestjs/common';
import { ShortcutEntity } from '../entities/shortcut.entity';
import { ShortcutsRepository } from '../repository/shortcuts.repository';
import { IsShortcutExpiredService } from './isShortcutExpired.service';

@Injectable()
export class FindShortcutByCodeService {
  constructor(
    private shortcutsRepository: ShortcutsRepository,
    private readonly isExpired: IsShortcutExpiredService,
  ) {}

  async execute(code: string): Promise<ShortcutEntity> {
    const shortcut = await this.shortcutsRepository.findBy({ code });

    if (!shortcut) {
    }

    if (this.isExpired.execute(shortcut)) {
      await this.shortcutsRepository.remove(shortcut.id);
      throw new AppError('A url encurtada não foi encontrada!', 404);
    }

    return shortcut;
  }
}
