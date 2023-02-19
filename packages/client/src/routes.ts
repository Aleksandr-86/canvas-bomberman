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
import { AppDispatch } from './store'
import { PathMatch } from 'react-router'

type RouterFetchDataArgs = {
  dispatch: AppDispatch
  match: PathMatch<'slug'>
}

export default [
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
    fetchData({ dispatch }: RouterFetchDataArgs) {
      //пример использования, если нужно предзагрузить данные для ssr
      //return dispatch(fetchForums());
    },
  },
  {
    path: '/forum/messages',
    element: ForumMessages,
    fetchData({ dispatch, match }: RouterFetchDataArgs) {
      //пример использования, если нужно предзагрузить данные для ssr
      //return dispatch(fetchForumMessages(match.params.slug));
    },
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
