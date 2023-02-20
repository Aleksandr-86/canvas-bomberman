import { useEffect } from 'react'
import { oauth } from '../store/actions/userActions'
import { useAppDispatch } from '../store/hooks'

export const useOauth = (code: string | null, redirectUri: string) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (code) {
      dispatch(oauth({ code, redirect_uri: redirectUri }))
    }
  }, [])
}
