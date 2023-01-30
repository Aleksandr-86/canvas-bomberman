import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { Button } from '../../components/button/button'
import { FormField } from '../../components/formField/formField'
import { Avatar } from '../../components/avatar/avatar'
import { UploadCard } from '../../components/cards/uploadCard/uploadCard'

import { getValidations } from '../../features/validation'
import { useForm, Validations } from '../../hooks/useForm'

import styles from './profile.module.css'
import avatarImg from '../../assets/images/avatar.png'

import { getUser } from '../../store/selectors'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setAuthFalse } from '../../store/userSlice'

type FormType = {
  displayName: string
  login: string
  firstName: string
  secondName: string
  email: string
  phone: string
}

export const Profile: React.FC = () => {
  const user = useAppSelector(getUser)
  const dispatch = useAppDispatch()

  const [validations, setValidations] = useState<Validations<FormType>>()
  const [isEdit, setEdit] = useState(false)
  const [isUploadCardActive, setUploadCardActive] = useState(false)

  useEffect(() => {
    setValidations(
      getValidations([
        'displayName',
        'firstName',
        'secondName',
        'phone',
        'email',
        'login',
      ])
    )
  }, [])

  const { values, errors, register, isValid } = useForm<FormType>({
    validations: validations,
    initialValues: user,
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isValid()) {
      alert(`Данные готовы к отправке: ${JSON.stringify(values, null, 4)}`)
    }
  }

  const handleEditData = () => {
    setEdit(!isEdit)
  }

  const handleExit = () => {
    dispatch(setAuthFalse())
  }

  const onAvatarClick = () => {
    setUploadCardActive(true)
  }

  return (
    <>
      <UploadCard
        isActive={isUploadCardActive}
        setActive={setUploadCardActive}
      />

      <form className={styles.profile} onSubmit={handleSubmit}>
        <Avatar
          size="Gargantuan"
          src={avatarImg}
          disabled={!isEdit}
          onAvatarClick={onAvatarClick}
        />

        <div className={styles.profileContent}>
          <FormField
            label="Псевдоним"
            name="name"
            type="text"
            {...register('displayName')}
            disabled={!isEdit}></FormField>
          <FormField
            label="Логин"
            placeholder="Login"
            name="login"
            type="text"
            {...register('login')}
            disabled={!isEdit}></FormField>
          <FormField
            label="Имя"
            name="firstName"
            type="text"
            {...register('firstName')}
            disabled={!isEdit}></FormField>
          <FormField
            label="Фамилия"
            name="secondName"
            type="text"
            {...register('secondName')}
            disabled={!isEdit}></FormField>
          <FormField
            label="Почта"
            name="email"
            type="email"
            {...register('email')}
            disabled={!isEdit}></FormField>
          <FormField
            label="Телефон"
            name="phone"
            type="tel"
            {...register('phone')}
            disabled={!isEdit}></FormField>
        </div>

        {isEdit ? (
          <div className={styles.profileAction}>
            <div className={styles.actionButton}>
              <Button type="submit">Сохранить</Button>
            </div>

            <div className={styles.actionButton}>
              <Button onClick={handleEditData}>Назад</Button>
            </div>
          </div>
        ) : (
          <div className={styles.profileAction}>
            <div className={styles.actionButton}>
              <Button onClick={handleEditData}>Изменить данные</Button>
            </div>

            <div className={styles.actionButton}>
              <Link className={styles.buttonLink} to="/profile/password">
                Изменить пароль
              </Link>
            </div>

            <div className={styles.actionButton}>
              <Link className={styles.buttonDanger} onClick={handleExit} to="/">
                Выход
              </Link>
            </div>
          </div>
        )}
      </form>
    </>
  )
}
