import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { Button } from '../../components/button/button'
import { FormField } from '../../components/formField/formField'

import { useForm, Validations } from '../../hooks/useForm'
import { getValidations } from '../../features/validation'

import styles from './changePassword.module.css'
import baseStyles from '../../app/app.module.css'

type FormType = {
  newPassword: string
  password: string
  repeatPassword: string
}

export const ChangePassword = () => {
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
          message: `Passwords doesnt match`,
        },
      },
    },
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isValid()) {
      console.log('submit')
    }
  }

  return (
    <>
      <form className={styles.changePassword} onSubmit={handleSubmit}>
        <div className={styles.changePasswordHeader}>Change Password</div>

        <div className={styles.changePasswordContent}>
          <FormField
            label="Old password"
            name="oldPassword"
            type="password"
            {...register('password')}></FormField>
          <FormField
            label="New password"
            name="newPssword"
            type="password"
            {...register('newPassword')}></FormField>
          <FormField
            label="Repeat password"
            name="repeatPassword"
            type="password"
            {...register('repeatPassword')}></FormField>
        </div>

        <div className={styles.changePasswordAction}>
          <div className={styles.actionButton}>
            <Button type="submit">Change</Button>
          </div>
          <div className={styles.actionButton}>
            <Link className={baseStyles.linkButton} to="/profile">
              Back
            </Link>
          </div>
        </div>
      </form>
    </>
  )
}
