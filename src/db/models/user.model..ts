import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Group } from './group.model';
import { Project } from './project.model';
import { Role } from './role.model';
import { SharedProject } from './shared-projects';

@Table({
  tableName: 'users',
  paranoid: true,
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.JSONB,
  })
  settings: object;

  @Column({
    type: DataType.STRING,
  })
  refreshToken: string[];

  @ForeignKey(() => Group)
  @Column
  groupId: number;

  @BelongsTo(() => Group, 'groupId')
  group: Group;

  @ForeignKey(() => Role)
  @Column
  roleId: number;

  @BelongsTo(() => Role, 'roleId')
  role: Role;

  @HasMany(() => Project, 'ownerId')
  projects: Project[];

  @HasMany(() => SharedProject, 'userId')
  sharedProjects: SharedProject[];
}
