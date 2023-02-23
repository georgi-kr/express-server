import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Group } from './group.model';
import { Role } from './role.model';

@Table({
  tableName: 'users',
  paranoid: true,
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.JSONB,
  })
  settings: object;

  @Column({
    type: DataType.STRING,
  })
  refreshToken: string[];

  @ForeignKey(() => Group)
  @Column({
    allowNull: false,
  })
  groupId: number;

  @BelongsTo(() => Group, 'groupId')
  group: Group;

  @ForeignKey(() => Role)
  @Column({
    allowNull: false,
  })
  roleId: number;

  @BelongsTo(() => Role, 'roleId')
  role: Role;
}
