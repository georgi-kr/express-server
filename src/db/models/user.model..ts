// @/models.ts
import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Project } from './project.model';

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

  @HasMany(() => Project, 'projectId')
  projects!: Project[] | [];
}
