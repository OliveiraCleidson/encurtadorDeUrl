import { CreateShortcutDTO } from '../../dtos/createShortcut.dto';
import { UpdateShortcutDTO } from '../../dtos/updateShortcut.dto';
import { ShortcutEntity } from '../../entities/shortcut.entity';
import { ShortcutsRepository } from '../shortcuts.repository';

export class FakeShortcutsRepository implements ShortcutsRepository {
  private entities: ShortcutEntity[] = [];

  async findBy(properties: Partial<ShortcutEntity>): Promise<ShortcutEntity> {
    const entity = this.entities.find(search =>
      this.compareEntities(search, properties),
    );

    return entity ? { ...entity } : undefined;
  }

  async findAllBy(
    properties: Partial<ShortcutEntity>,
  ): Promise<ShortcutEntity[]> {
    const entity = this.entities.filter(search =>
      this.compareEntities(search, properties),
    );

    return entity ? { ...entity } : undefined;
  }

  async create(data: CreateShortcutDTO, code: string): Promise<ShortcutEntity> {
    const entity = {} as ShortcutEntity;
    Object.assign(entity, { ...data, id: this.generateNumberId(), code });

    this.entities.push(entity);

    return { ...entity };
  }

  async update(id: number, data: UpdateShortcutDTO): Promise<ShortcutEntity> {
    const entityIndex = this.entities.findIndex(search => search.id === id);

    if (entityIndex < 0) {
      throw new Error('Entidade não encontrada');
    }

    this.entities.splice(
      entityIndex,
      1,
      Object.assign(this.entities[entityIndex], data),
    );

    return { ...this.entities[entityIndex] };
  }

  async remove(id: number): Promise<boolean> {
    const entityIndex = this.entities.findIndex(search => search.id === id);

    if (entityIndex < 0) {
      return;
    }

    this.entities.splice(entityIndex, 1);
  }

  private generateNumberId(): number {
    if (this.entities.length === 0) {
      return 0;
    }

    return this.entities[this.entities.length - 1].id + 1;
  }

  private compareEntities(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    const sameKeys = keys1.filter(value => keys2.includes(value));

    for (const key of sameKeys) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }

    return true;
  }
}
