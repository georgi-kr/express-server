import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from './user.model.';

@Table({
  tableName: 'projects',
})
export class Project extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  parameters!: any | Record<string, any>;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  data!: string;

  @ForeignKey(() => User)
  @Column
  ownerId!: number;

  @BelongsTo(() => User, 'ownerId')
  Owner!: User;
}
