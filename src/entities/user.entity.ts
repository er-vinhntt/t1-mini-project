import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { RoleEntity } from './role.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column()
  @Index({ unique: true })
  email: string;

  @Column({ type: 'char', length: 60 })
  password: string;

  @Column({ default: true })
  isVerify: boolean;

  @Column({ default: 2 })
  roleId: number;

  @ManyToOne(() => RoleEntity)
  role: RoleEntity;

  @Column({ type: 'char', length: 15, nullable: true })
  phoneNumber?: string;

  @Column({ nullable: true })
  avatar?: string;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  constructor(user: Partial<UserEntity> = {}) {
    super();
    Object.assign(this, user);
  }
}
