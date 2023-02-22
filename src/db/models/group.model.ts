// @/models.ts
import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { User } from './user.model.';

@Table({
  tableName: 'groups',
})
export class Group extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.JSONB,
    allowNull: false,
  })
  settings: object;

  @HasMany(() => User, 'userId')
  users: User[];
}
