import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/button/button'
import { FormField } from '../../components/formField/formField'

import { useForm, Validations } from '../../hooks/useForm'
import { getValidations } from '../../features/validation'

import { useAppDispatch } from '../../store/hooks'
import { registerUser } from '../../store/userActions'
import { transformUserDTO } from '../../features/api/apiTransformers'

import styles from './signUp.module.css'
import baseStyles from '../../app/app.module.css'

type FormType = {
  login: string
  firstName: string
  secondName: string
  password: string
  repeatPassword: string
  phone: string
  email: string
}

export const SignUp: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [validations, setValidations] = useState<Validations<FormType>>()

  useEffect(() => {
    setValidations(
      getValidations([
        'login',
        'firstName',
        'secondName',
        'phone',
        'email',
        'password',
      ])
    )
  }, [])

  const { values, errors, register, watch, isValid } = useForm<FormType>({
    validations: {
      ...validations,
      repeatPassword: {
        custom: {
          validation: (value: string) => value === watch('password'),
          message: `Пароли не совпадают`,
        },
      },
    },
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isValid()) {
      const { repeatPassword, ...data } = values

      dispatch(registerUser(transformUserDTO(data)))
      navigate('/')
    }
  }

  return (
    <>
      <form className={styles.signUp} onSubmit={handleSubmit}>
        <div className={styles.signUpHeader}>Регистрация</div>

        <div className={styles.signUpContent}>
          <FormField
            label="Логин"
            name="name"
            type="text"
            {...register('login')}></FormField>
          <FormField
            label="Имя"
            name="firstName"
            type="text"
            {...register('firstName')}></FormField>
          <FormField
            label="Фамилия"
            name="secondName"
            type="text"
            {...register('secondName')}></FormField>
          <FormField
            label="Почта"
            name="email"
            type="email"
            {...register('email')}></FormField>
          <FormField
            label="Телефон"
            name="phone"
            type="tel"
            {...register('phone')}></FormField>
          <FormField
            label="Пароль"
            name="password"
            type="password"
            {...register('password')}></FormField>
          <FormField
            label="Пароль еще раз"
            name="repeatPassword"
            type="password"
            {...register('repeatPassword')}></FormField>
        </div>

        <div className={styles.signUpAction}>
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
