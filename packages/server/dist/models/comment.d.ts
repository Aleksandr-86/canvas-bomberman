import { Model } from 'sequelize-typescript'
import type { Optional } from 'sequelize'
import { Topic } from './topic'
interface IComment {
  id: number
  topic_id: number
  user_id: number
  body: string
  like_count?: number
  dislike_count?: number
}
declare type ICreateComment = Optional<IComment, 'id'>
export declare class Comment extends Model<IComment, ICreateComment> {
  topic: Topic
  topic_id: number
  author_id: number
  body: string
  like_count: number
  dislike_count: number
}
export {}
//# sourceMappingURL=comment.d.ts.map
