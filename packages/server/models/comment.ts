import {
  BelongsTo,
  Column,
  Default,
  ForeignKey,
  Min,
  Model,
  NotEmpty,
  Table,
} from 'sequelize-typescript'
import type { Optional } from 'sequelize'
import { Topic } from './topic'
import { User } from './user'

interface IComment {
  id: number
  topic_id: number
  user_id: number
  body: string
  like_count?: number
  dislike_count?: number
}

type ICreateComment = Optional<IComment, 'id'>

@Table({ tableName: 'comments', timestamps: true })
export class Comment extends Model<IComment, ICreateComment> {
  @BelongsTo(() => Topic)
  topic!: Topic

  @ForeignKey(() => Topic)
  topic_id!: number

  @ForeignKey(() => User)
  author_id!: number

  @NotEmpty
  @Column
  body!: string

  @Min(0)
  @Default(0)
  @Column
  like_count!: number

  @Min(0)
  @Default(0)
  @Column
  dislike_count!: number
}
