import {
  Column,
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
  topicId: number
  authorId: number
  body: number
  likeCount: number
  dislikeCount: number
  createdAt: Date
  updatedAt: Date
}

type ICreateComment = Optional<IComment, 'id' | 'createdAt' | 'updatedAt'>

@Table({ tableName: 'comments', timestamps: true })
export class Comment extends Model<IComment, ICreateComment> {
  @ForeignKey(() => Topic)
  topicId!: number

  @ForeignKey(() => User)
  authorId!: number

  @NotEmpty
  @Column
  body!: string

  @Min(0)
  @Column
  likeCount!: number

  @Min(0)
  @Column
  dislikeCount!: number
}
