// @/models.ts
import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { User } from './user.model.';

@Table({
  tableName: 'roles',
  timestamps: false,
})
export class Role extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @HasMany(() => User, 'roleId')
  users: User[];
}
