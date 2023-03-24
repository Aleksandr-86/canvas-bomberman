import { Model } from 'sequelize-typescript'
import { Comment } from './comment'
import type { Optional } from 'sequelize'
interface ITopic {
  id: number
  body: string
  user_id: number
  comments?: Comment[]
  createdAt: Date
  updatedAt: Date
}
declare type ICreateTopic = Optional<ITopic, 'id' | 'createdAt' | 'updatedAt'>
export declare class Topic extends Model<ITopic, ICreateTopic> {
  user_id: number
  body: string
  comments: Comment[]
}
export {}
//# sourceMappingURL=topic.d.ts.map
