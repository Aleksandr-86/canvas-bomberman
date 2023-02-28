import { Landing } from './pages/landing/landing'
import { SignIn } from './pages/signIn/signIn'
import { SignUp } from './pages/signUp/signUp'
import { Profile } from './pages/profile/profile'
import { ChangePassword } from './pages/changePassword/changePassword'
import { Leaderboard } from './pages/leaderboard/leaderboard'
import { Forum } from './pages/forum/forum'
import { ForumMessages } from './pages/forumMessages/forumMessages'
import { ForumNewPost } from './pages/forumNewPost/forumNewPost'
import { ForumNewMessage } from './pages/forumNewMessage/forumNewMessage'
import { Game } from './pages/game/game'

type Routes = {
  initStoreWithServer?: (slug: string) => []
  path: string
  element: React.FC<Record<string, unknown>> | (() => JSX.Element)
}[]

export const routes: Routes = [
  {
    path: '/',
    element: Landing,
  },
  {
    path: '/sign-in',
    element: SignIn,
  },
  {
    path: '/sign-up',
    element: SignUp,
  },
  {
    path: '/profile',
    element: Profile,
  },
  {
    path: '/profile/password',
    element: ChangePassword,
  },
  {
    path: '/leaderboard',
    element: Leaderboard,
  },
  {
    path: '/forum',
    element: Forum,
    //пример использования, если нужно предзагрузить данные для ssr
    //initStoreWithServer(slug: string) {
    //  return [fetchForum(), fetchForumsMessages(slug)]
    //}
  },
  {
    path: '/forum/messages',
    element: ForumMessages,
  },
  {
    path: '/forum-new-post',
    element: ForumNewPost,
  },
  {
    path: '/forum-new-message',
    element: ForumNewMessage,
  },
  {
    path: '/game',
    element: Game,
  },
]
