import type { Optional } from 'sequelize'
import { Column, HasMany, Model, Table, Unique } from 'sequelize-typescript'
import { Comment } from './comment'
import { Topic } from './topic'

interface IUser {
  id: number
  createdAt: number
  updatedAt: number
  yandexId: number
  comments: Comment[]
  topics: Topic[]
}

type ICreateUser = Optional<IUser, 'createdAt' | 'updatedAt' | 'id'>

@Table({ tableName: 'users', timestamps: true })
export class User extends Model<IUser, ICreateUser> {
  @Unique
  @Column
  yandex_id!: number

  @HasMany(() => Comment)
  comments!: Comment[]

  @HasMany(() => Topic)
  topics!: Topic[]
}
