import { Routes, Route } from 'react-router-dom'

import { Landing } from './landing/landing'
import { SignIn } from './signIn/signIn'
import { SignUp } from './signUp/signUp'
import { Profile } from './profile/profile'
import { Leaderboard } from './leaderboard/leaderboard'
import { Forum } from './forum/forum'
import { Game } from './game/game'

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  )
}

export { AppRouting }
