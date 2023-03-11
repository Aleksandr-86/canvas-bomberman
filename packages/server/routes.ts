const Routes = {
  Landing: '/',
  Auth: '/sign-in',
  SignUp: '/sign-up',
  Profile: '/profile',
  Game: '/game',
  Leaderboard: '/leaderboard',
  Forum: '/forum',
}

export const authRoutes = [Routes.Profile, Routes.Game, Routes.Leaderboard]

export const redirectRoute = Routes.Auth
