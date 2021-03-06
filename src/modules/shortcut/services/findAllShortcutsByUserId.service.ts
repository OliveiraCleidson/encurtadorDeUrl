import { AppError } from '@/common/errors/AppError';
import { Injectable } from '@nestjs/common';
import { ShortcutEntity } from '../entities/shortcut.entity';
import { ShortcutsRepository } from '../repository/shortcuts.repository';

@Injectable()
export class FindAllShortcutsByUserIdService {
  constructor(private shortcutsRepository: ShortcutsRepository) {}

  async execute(userId: string): Promise<ShortcutEntity[]> {
    const shortcut = await this.shortcutsRepository.findAllBy({ userId });

    if (!shortcut) {
      throw new AppError('A url encurtada não foi encontrada!', 404);
    }

    return shortcut;
  }
}
