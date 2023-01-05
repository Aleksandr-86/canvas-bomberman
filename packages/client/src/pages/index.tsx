import { Routes, Route } from 'react-router-dom'
import { Game } from './game'
import { Landing } from './landing/landing'
import { SignIn } from './sign-in'
import { SignUp } from './sign-up'
import { Leaderboard } from './leaderboard'
import { Forum } from './forum'

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/user" element={<Landing />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  )
}

export { AppRouting }
