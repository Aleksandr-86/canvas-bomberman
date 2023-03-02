import { AutoIncrement, Column, Model, Table } from 'sequelize-typescript'

@Table({
  timestamps: true,
  tableName: 'users',
})
class User extends Model {
  @Column
  @AutoIncrement
  id = 0
}
