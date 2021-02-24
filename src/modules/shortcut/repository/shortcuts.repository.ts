import { CreateShortcutDTO } from '../dtos/createShortcut.dto';
import { UpdateShortcutDTO } from '../dtos/updateShortcut.dto';
import { ShortcutEntity } from '../entities/shortcut.entity';

export abstract class ShortcutsRepository {
  abstract findBy(
    properties: Partial<ShortcutEntity>,
  ): Promise<ShortcutEntity | undefined>;

  abstract findAllBy(
    properties: Partial<ShortcutEntity>,
  ): Promise<ShortcutEntity[] | undefined>;
  abstract create(
    data: CreateShortcutDTO,
    code: string,
  ): Promise<ShortcutEntity>;
  abstract update(id: number, data: UpdateShortcutDTO): Promise<ShortcutEntity>;
  abstract remove(id: number): Promise<boolean>;
}
