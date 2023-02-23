// @/models.ts
import { Table, Model, Column, DataType } from 'sequelize-typescript';

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
}
