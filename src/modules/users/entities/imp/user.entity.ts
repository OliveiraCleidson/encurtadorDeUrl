import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';
import { UserEntity } from '../user.entity';

@Entity('users')
export class UserEntityIMP implements UserEntity {
  @PrimaryColumn({ type: 'varchar', length: '36' })
  id: string = v4();
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
