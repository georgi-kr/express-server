// @/models.ts
import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  ForeignKey,
} from 'sequelize-typescript';
import { Group } from './group.model';
import { Project } from './project.model';
import { Role } from './role.model';

@Table({
  tableName: 'users',
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  settings!: any | Record<string, any>;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  refreshToken!: string[] | [];

  @ForeignKey(() => Group)
  @Column
  groupId!: number;

  @ForeignKey(() => Role)
  @Column
  roleId!: number;

  @HasMany(() => Project, 'projectId')
  projects!: Project[] | [];
}
