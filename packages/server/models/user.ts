import type { Optional } from 'sequelize'
import {
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript'
import { Comment } from './comment'
import { Topic } from './topic'
import { UserTheme } from './userTheme'

export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

interface IUser {
  id: number
  ya_id: number
  ya_login: string
  display_name: string
  avatar: string
  user_theme: 'light' | 'dark'
  createdAt: number
  updatedAt: number
  comments: Comment[]
  topics: Topic[]
}

type ICreateUser = Optional<
  IUser,
  'createdAt' | 'updatedAt' | 'id' | 'comments' | 'topics' | 'user_theme'
>

@Table({ tableName: 'users', timestamps: true })
export class User extends Model<IUser, ICreateUser> {
  @Column({
    primaryKey: true,
    unique: true,
    allowNull: false,
    type: DataType.INTEGER,
  })
  ya_id!: number

  @Column({ type: DataType.STRING, allowNull: false })
  ya_login!: string

  @Column({ type: DataType.STRING, allowNull: false })
  display_name!: string

  @Column({ type: DataType.STRING, allowNull: false })
  avatar!: string

  @HasOne(() => UserTheme)
  user_theme!: string

  @HasMany(() => Comment)
  comments!: Comment[]

  @HasMany(() => Topic)
  topics!: Topic[]
}
