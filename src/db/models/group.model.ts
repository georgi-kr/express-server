// @/models.ts
import { Table, Model, Column, DataType } from 'sequelize-typescript';

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
  })
  settings: object;
}
