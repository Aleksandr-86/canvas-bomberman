import { ErrorStub } from '../components/errorStub/errorStub'
import { ChangePassword } from '../pages/changePassword/changePassword'
import { Forum } from '../pages/forum/forum'
import { ForumMessages } from '../pages/forumMessages/forumMessages'
import { ForumNewMessage } from '../pages/forumNewMessage/forumNewMessage'
import { ForumNewPost } from '../pages/forumNewPost/forumNewPost'
import { Game } from '../pages/game/game'
import { Landing } from '../pages/landing/landing'
import { Leaderboard } from '../pages/leaderboard/leaderboard'
import { Profile } from '../pages/profile/profile'
import { SignIn } from '../pages/signIn/signIn'
import { SignUp } from '../pages/signUp/signUp'

export const routes = [
  {
    path: '/',
    element: <Landing />,
    errorElement: <ErrorStub />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/profile/password',
    element: <ChangePassword />,
  },
  {
    path: '/leaderboard',
    element: <Leaderboard />,
  },
  {
    path: '/forum',
    element: <Forum />,
  },
  {
    path: '/forum-messages',
    element: <ForumMessages />,
  },
  {
    path: '/forum-new-post',
    element: <ForumNewPost />,
  },
  {
    path: '/forum-new-message',
    element: <ForumNewMessage />,
  },
  {
    path: '/game',
    element: <Game />,
  },
]

/**
 * Root page
 */
// const ROOT = {
//   path: '/',
//   element: <Landing />,
//   errorElement: <ErrorStub />,
//   children,
//   id: 'root',
// }

/**
 * Route maps
 */
// export const AUTHORIZED_ROUTES = {
//   basePath: '/game',
//   list: [RoutePaths.game, RoutePaths.forum, RoutePaths.leaderboard],
// }

// export const UNAUTHORIZED_ROUTES = {
//   basePath: RoutePaths.login,
//   list: [RoutePaths.login, RoutePaths.signup],
// }

// export const routes = [ROOT]
