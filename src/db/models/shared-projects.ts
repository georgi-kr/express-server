import {
  Table,
  Model,
  Column,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { ProjectPermission } from './permission.model';
import { User } from './user.model.';

@Table({
  tableName: 'shared_projects',
  deletedAt: 'deleted',
})
export class SharedProject extends Model {
  @ForeignKey(() => User)
  @Column
  ownerId!: number;

  @BelongsTo(() => User, 'ownerId')
  Owner!: User;

  @ForeignKey(() => User)
  @Column
  projectId!: number;

  @BelongsTo(() => User, 'projectId')
  Project!: User;

  @ForeignKey(() => User)
  @Column
  userId!: number;

  @BelongsTo(() => User, 'userId')
  User!: User;

  @ForeignKey(() => ProjectPermission)
  @Column
  projectPermissionId!: number;

  @BelongsTo(() => ProjectPermission, 'projectPermissionId')
  ProjectPermission!: ProjectPermission;
}
