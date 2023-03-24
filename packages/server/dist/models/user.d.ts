import type { Optional } from 'sequelize'
import { Model } from 'sequelize-typescript'
import { Comment } from './comment'
import { Topic } from './topic'
export declare enum Theme {
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
declare type ICreateUser = Optional<
  IUser,
  'createdAt' | 'updatedAt' | 'id' | 'comments' | 'topics' | 'user_theme'
>
export declare class User extends Model<IUser, ICreateUser> {
  ya_id: number
  ya_login: string
  display_name: string
  avatar: string
  user_theme: string
  comments: Comment[]
  topics: Topic[]
}
export {}
//# sourceMappingURL=user.d.ts.map
