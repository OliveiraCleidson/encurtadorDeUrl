import { AppError } from '@/common/errors/AppError';
import { getRepository, Repository } from 'typeorm';
import { CreateShortcutDTO } from '../../dtos/createShortcut.dto';
import { UpdateShortcutDTO } from '../../dtos/updateShortcut.dto';
import { ShortcutEntityIMP } from '../../entities/imp/shortcut.entity';
import { ShortcutEntity } from '../../entities/shortcut.entity';
import { ShortcutsRepository } from '../shortcuts.repository';

export class ShortcutsRepositoryIMP implements ShortcutsRepository {
  private repository: Repository<ShortcutEntityIMP>;
  constructor() {
    this.repository = getRepository(ShortcutEntityIMP);
  }
  findBy(properties: Partial<ShortcutEntity>): Promise<ShortcutEntity> {
    const entity = this.repository.findOne({ where: { ...properties } });

    return entity;
  }

  findAllBy(properties: Partial<ShortcutEntity>): Promise<ShortcutEntity[]> {
    const entity = this.repository.find({ where: { ...properties } });

    return entity;
  }

  create(data: CreateShortcutDTO, code: string): Promise<ShortcutEntity> {
    const entity = this.repository.save(
      this.repository.create({ ...data, code }),
    );

    return entity;
  }
  async update(id: number, data: UpdateShortcutDTO): Promise<ShortcutEntity> {
    const entity = await this.repository.findOne(id);

    if (!entity) {
      throw new AppError('Shortcut não encontrada');
    }

    return this.repository.save(Object.assign(entity, data));
  }
  async remove(id: number): Promise<boolean> {
    const entity = await this.repository.findOne(id);

    if (!entity) {
      throw new AppError('Shortcut não encontrada');
    }

    await this.repository.remove(entity);

    return;
  }
}
