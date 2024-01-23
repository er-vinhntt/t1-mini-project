import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Roles {
  ADMIN = 'Admin',
  USER = 'User',
}

@Entity({ name: 'roles' })
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: Roles, default: Roles.USER })
  name: Roles;
}
