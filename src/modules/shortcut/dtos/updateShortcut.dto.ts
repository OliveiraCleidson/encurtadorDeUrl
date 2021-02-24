import { PartialType } from '@nestjs/mapped-types';
import { CreateShortcutDTO } from './createShortcut.dto';

export class UpdateShortcutDTO extends PartialType(CreateShortcutDTO) {
  id: number;
}
