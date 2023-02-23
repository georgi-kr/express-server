import {
  Table,
  Model,
  Column,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { ProjectPermission } from './permission.model';
import { Project } from './project.model';
import { User } from './user.model.';

@Table({
  tableName: 'shared_projects',
  deletedAt: 'deleted',
})
export class SharedProject extends Model {
  @ForeignKey(() => Project)
  @Column({
    allowNull: false,
  })
  projectId!: number;

  @BelongsTo(() => User, 'projectId')
  Project!: User;

  @ForeignKey(() => User)
  @Column({
    allowNull: false,
  })
  userId!: number;

  @BelongsTo(() => User, 'userId')
  user!: User;

  @ForeignKey(() => ProjectPermission)
  @Column({
    allowNull: false,
  })
  projectPermissionId!: number;

  @BelongsTo(() => ProjectPermission, 'projectPermissionId')
  projectPermission!: ProjectPermission;
}
