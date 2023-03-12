import {
  Model,
  Table,
  PrimaryKey,
  Column,
  DataType,
  AllowNull,
} from 'sequelize-typescript'

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'user_theme',
})
export class UserTheme extends Model<UserTheme> {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.INTEGER)
  user_id!: number

  @AllowNull(false)
  @Column(DataType.STRING)
  value!: string
}
