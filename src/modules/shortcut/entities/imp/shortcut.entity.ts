import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ShortcutEntity } from '../shortcut.entity';

@Entity('shortcuts')
export class ShortcutEntityIMP implements ShortcutEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: false })
  code: string;

  @ApiProperty()
  @Column({ nullable: false })
  baseLink: string;

  @ApiProperty()
  @Column({ nullable: true })
  userId?: string;
}
