import {
  Column,
  Default,
  ForeignKey,
  HasMany,
  Model,
  NotEmpty,
  Table,
} from 'sequelize-typescript'
import { User } from './user'
import { Comment } from './comment'
import type { Optional } from 'sequelize'

interface ITopic {
  id: number
  body: string
  authorId: number
  comments?: Comment[]
  createdAt: Date
  updatedAt: Date
}

type ICreateTopic = Optional<ITopic, 'id' | 'createdAt' | 'updatedAt'>

@Table({ tableName: 'topics', timestamps: true })
export class Topic extends Model<ITopic, ICreateTopic> {
  @ForeignKey(() => User)
  user_id!: number

  @NotEmpty
  @Column
  body!: string

  @HasMany(() => Comment)
  comments!: Comment[]
}
