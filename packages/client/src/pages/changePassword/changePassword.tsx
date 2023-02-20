import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/button/button'
import { FormField } from '../../components/formField/formField'

import { useForm, Validations } from '../../hooks/useForm'
import { getValidations } from '../../features/validation'

import { editPassword } from '../../store/actions/userActions'
import { useAppDispatch } from '../../store/hooks'

import styles from './changePassword.module.css'
import baseStyles from '../../app/app.module.css'

type FormType = {
  newPassword: string
  password: string
  repeatPassword: string
}

export const ChangePassword = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [validations, setValidations] = useState<Validations<FormType>>()

  useEffect(() => {
    setValidations(getValidations(['password', 'newPassword']))
  }, [])

  const { values, errors, register, watch, isValid } = useForm<FormType>({
    validations: {
      ...validations,
      repeatPassword: {
        custom: {
          validation: (value: string) => value === watch('newPassword'),
          message: `Пароли не совпадают`,
        },
      },
    },
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isValid()) {
      const { repeatPassword, password, newPassword } = values

      dispatch(
        editPassword({
          oldpassword: password,
          newpassword: newPassword,
        })
      )

      navigate('/profile')
    }
  }

  return (
    <>
      <form className={styles.changePassword} onSubmit={handleSubmit}>
        <div className={styles.changePasswordHeader}>Изменить пароль</div>

        <div className={styles.changePasswordContent}>
          <FormField
            label="Старый пароль"
            name="oldPassword"
            type="password"
            {...register('password')}></FormField>
          <FormField
            label="Новый пароль"
            name="newPssword"
            type="password"
            {...register('newPassword')}></FormField>
          <FormField
            label="Пароль еще раз"
            name="repeatPassword"
            type="password"
            {...register('repeatPassword')}></FormField>
        </div>

        <div className={styles.changePasswordAction}>
          <div className={styles.actionButton}>
            <Button type="submit">Сохранить</Button>
          </div>
          <div className={styles.actionButton}>
            <Link className={baseStyles.linkButton} to="/profile">
              Назад
            </Link>
          </div>
        </div>
      </form>
    </>
  )
}
