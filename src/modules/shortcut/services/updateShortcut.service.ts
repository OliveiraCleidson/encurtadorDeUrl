import { AppError } from '@/common/errors/AppError';
import { Injectable } from '@nestjs/common';
import { UpdateShortcutDTO } from '../dtos/updateShortcut.dto';
import { ShortcutEntity } from '../entities/shortcut.entity';
import { ShortcutsRepository } from '../repository/shortcuts.repository';

@Injectable()
export class UpdateShortcutService {
  constructor(private shortcutsRepository: ShortcutsRepository) {}

  async execute(data: UpdateShortcutDTO) {
    const shortcut = await this.getShortcut(data.id);

    this.verifyIfUserIsOwnerOfShortcut(shortcut, data.userId);

    return this.shortcutsRepository.update(data.id, data);
  }

  private async getShortcut(shortcutId: number) {
    const shortcut = await this.shortcutsRepository.findBy({ id: shortcutId });

    if (!shortcut) {
      throw new AppError('Shortcut não encontrada');
    }

    return shortcut;
  }

  private verifyIfUserIsOwnerOfShortcut(
    shortcut: ShortcutEntity,
    userId: string,
  ) {
    if (shortcut?.userId !== userId) {
      throw new AppError('Shortcut não encontrada');
    }
  }
}
