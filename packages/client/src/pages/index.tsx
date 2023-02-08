import { Routes, Route } from 'react-router-dom'

import { Landing } from './landing/landing'
import { SignIn } from './signIn/signIn'
import { SignUp } from './signUp/signUp'
import { Profile } from './profile/profile'
import { ChangePassword } from './changePassword/changePassword'
import { Leaderboard } from './leaderboard/leaderboard'
import { Forum } from './forum/forum'
import { ForumMessages } from './forumMessages/forumMessages'
import { ForumNewPost } from './forumNewPost/forumNewPost'
import { ForumNewMessage } from './forumNewMessage/forumNewMessage'
import { Game } from './game/game'

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/password" element={<ChangePassword />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/forum-messages" element={<ForumMessages />} />
      <Route path="/forum-new-post" element={<ForumNewPost />} />
      <Route path="/forum-new-message" element={<ForumNewMessage />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  )
}

export { AppRouting }
