import { AppDispatch } from '../../store'
import { useDispatch } from 'react-redux'
import { getAuth } from '../../store/authSlice'
import { IFormData } from '../../hooks/useAuth'

export const SignIn = () => {
  const dispatch: AppDispatch = useDispatch()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data: IFormData = { name: '', password: '' }
    dispatch(getAuth(data))
  }

  return <h2>SignIn page</h2>
}
