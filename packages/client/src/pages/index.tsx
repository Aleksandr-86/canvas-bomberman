import { Routes, Route } from 'react-router-dom'
import { Game } from './game'
import { Landing } from './landing'
import { SignIn } from './sign-in'
import { SignUp } from './sign-up'
import { Leaderboard } from './leaderboard'
import { Forum } from './forum/forum'
import { ForumMessages } from './forum-messages/forum-messages'
import { ForumNewPost } from './forum-new-post/forum-new-post'
import { ForumNewMessage } from './forum-new-message/forum-new-message'

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/user" element={<Landing />} />
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
