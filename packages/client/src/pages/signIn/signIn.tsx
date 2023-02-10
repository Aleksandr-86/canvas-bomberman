import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/button/button'
import { FormField } from '../../components/formField/formField'

import { useForm, Validations } from '../../hooks/useForm'
import { getValidations } from '../../features/validation'

import { useAppDispatch } from '../../store/hooks'
import { login } from '../../store/userActions'

import styles from './signIn.module.css'
import baseStyles from '../../app/app.module.css'

type FormType = {
  login: string
  password: string
}

export const SignIn: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [validations, setValidations] = useState<Validations<FormType>>()

  useEffect(() => {
    setValidations(getValidations(['login', 'password']))
  }, [])

  const { values, errors, register, watch, isValid } = useForm<FormType>({
    validations: validations,
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isValid()) {
      dispatch(login(values))
      navigate('/')
    }
  }

  return (
    <>
      <form className={styles.signIn} onSubmit={handleSubmit}>
        <div className={styles.signInHeader}>Вход</div>

        <div className={styles.signInContent}>
          <FormField
            label="Логин"
            name="name"
            type="text"
            {...register('login')}></FormField>
          <FormField
            label="Пароль"
            name="password"
            type="password"
            {...register('password')}></FormField>
        </div>

        <div className={styles.signInAction}>
          <div className={styles.actionButton}>
            <Button type="submit">Все верно!</Button>
          </div>

          <div className={styles.actionButton}>
            <Link className={baseStyles.linkButton} to="/">
              На Главную
            </Link>
          </div>
        </div>
      </form>
    </>
  )
}
