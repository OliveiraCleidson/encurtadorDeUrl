import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';
import { UserEntity } from '../user.entity';

@Entity('users')
export class UserEntityIMP implements UserEntity {
  @ApiProperty()
  @PrimaryColumn({ type: 'varchar', length: '36' })
  id: string = v4();

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;
}
