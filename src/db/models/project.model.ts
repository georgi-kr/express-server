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
  paranoid: true,
})
export class Project extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @Column({
    type: DataType.JSONB,
  })
  parameters: object;

  @Column({
    type: DataType.JSONB,
  })
  data: object;

  @ForeignKey(() => User)
  @Column({
    allowNull: false,
  })
  ownerId!: number;

  @BelongsTo(() => User, 'ownerId')
  user!: User;
}
