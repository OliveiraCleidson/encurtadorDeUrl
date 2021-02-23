import { Injectable } from '@nestjs/common';
import { ShortcutsRepository } from '../repositories/shortcuts.repository';

@Injectable()
export class UpdateShortcutService {
  constructor(private shortcutsRepository: ShortcutsRepository) {}
}
