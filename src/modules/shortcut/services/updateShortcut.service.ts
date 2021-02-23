import { Injectable } from '@nestjs/common';
import { ShortcutsRepository } from '../repository/shortcuts.repository';

@Injectable()
export class UpdateShortcutService {
  constructor(private shortcutsRepository: ShortcutsRepository) {}
}
