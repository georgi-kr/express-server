// @/models.ts
import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { SharedProject } from './shared-projects';

@Table({
  tableName: 'permissions',
  timestamps: false,
})
export class ProjectPermission extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @HasMany(() => SharedProject, 'projectPermissionId')
  sharedProjects: SharedProject[];
}
