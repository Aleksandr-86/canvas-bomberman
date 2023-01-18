import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { Button } from '../../components/button/button'
import { FormField } from '../../components/formField/formField'

import { useForm, Validations } from '../../hooks/useForm'
import { getValidations } from '../../features/validation'

import styles from './signUp.module.css'
import baseStyles from '../../app/app.module.css'

type FormType = {
  displayName: string
  firstName: string
  secondName: string
  password: string
  repeatPassword: string
  phone: string
  email: string
}

export const SignUp: React.FC = () => {
  const [validations, setValidations] = useState<Validations<FormType>>()

  useEffect(() => {
    setValidations(
      getValidations([
        'displayName',
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
          message: `Passwords doesnt match`,
        },
      },
    },
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isValid()) {
      console.log('send')
    }
  }

  return (
    <>
      <form className={styles.signUp} onSubmit={handleSubmit}>
        <div className={styles.signUpHeader}>Register</div>

        <div className={styles.signUpContent}>
          <FormField
            label="Name"
            name="name"
            type="text"
            {...register('displayName')}></FormField>
          <FormField
            label="First name"
            name="firstName"
            type="text"
            {...register('firstName')}></FormField>
          <FormField
            label="Second name"
            name="secondName"
            type="text"
            {...register('secondName')}></FormField>
          <FormField
            label="Email"
            name="email"
            type="email"
            {...register('email')}></FormField>
          <FormField
            label="Phone"
            name="phone"
            type="tel"
            {...register('phone')}></FormField>
          <FormField
            label="Password"
            name="password"
            type="password"
            {...register('password')}></FormField>
          <FormField
            label="Repeat password"
            name="repeatPassword"
            type="password"
            {...register('repeatPassword')}></FormField>
        </div>

        <div className={styles.signUpAction}>
          <div className={styles.actionButton}>
            <Button type="submit">Register</Button>
          </div>

          <div className={styles.actionButton}>
            <Link className={baseStyles.linkButton} to="/">
              Back
            </Link>
          </div>
        </div>
      </form>
    </>
  )
}
