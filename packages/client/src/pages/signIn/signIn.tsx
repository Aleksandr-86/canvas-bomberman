import { getAuth } from '../../store/authSlice'
import { IFormData } from '../../hooks/useAuth'
import { useAppDispatch } from '../../store/hooks'

export const SignIn = () => {
  const dispatch = useAppDispatch()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data: IFormData = { name: '', password: '' }
    dispatch(getAuth(data))
  }

  return <h2>SignIn page</h2>
}
