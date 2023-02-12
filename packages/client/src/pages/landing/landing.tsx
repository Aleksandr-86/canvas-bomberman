import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import { useAppSelector } from '../../store/hooks'
import { getUser } from '../../store/selectors'
import { NavigationBar } from '../../components/navigationBar/navigationBar'
import bombermanLogoImg from '../../assets/images/bombermanLogo.png'
import heroImg from '../../assets/images/hero.png'

import baseStyles from '../../app/app.module.css'
import styles from './landing.module.css'
import axios from 'axios'

// Содержание для авторизованных пользователей
const ContentLogged = () => {
  const { displayName } = useAppSelector(getUser).user

  return (
    <>
      <div className={styles.descriptionTop}>
        Привет {displayName}! <br />
        Спешим напомнить, что ты в любой момент можешь освежить свои знания по
        игре, перечитав{' '}
        <Link className={styles.link} to="/rules">
          правила
        </Link>{' '}
        и посмотреть{' '}
        <Link className={styles.link} to="/leaderboard">
          таблицу лидеров!
        </Link>
      </div>
      <Link className={baseStyles.linkButton} to="/game">
        Погнали
      </Link>
    </>
  )
}

// Содержание для неавторизованных пользователей
const ContentNotLogged = () => (
  <>
    <div className={styles.descriptionTop}>
      Привет, мы рады приветствовать тебя! <br />
      Прежде чем ты начнёшь взрывать всё вокруг, загляни в{' '}
      <Link className={styles.link} to="/rules">
        правила
      </Link>
      . Уверены, это поможет тебе возглавить нашу{' '}
      <Link className={styles.link} to="/leaderboard">
        таблицу лидеров!
      </Link>
    </div>
    <div className={styles.buttonWrapper}>
      <Link className={baseStyles.linkButton} to="/sign-in">
        Войти
      </Link>
      <Link className={baseStyles.linkButton} to="/sign-up">
        Зарегистрироваться
      </Link>
    </div>
  </>
)

export const Landing = () => {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const code = searchParams.get(`code`)

    if (code) {
      axios
        .post(
          `https://ya-praktikum.tech/api/v2/oauth/yandex
          `,
          {
            code,
            redirect_uri: `http://localhost:3000`,
          }
        )
        .then(() => {
          axios.get(`https://ya-praktikum.tech/api/v2/auth/user`, {
            withCredentials: true,
          })
        })
    }
  }, [searchParams])

  const { isAuth } = useAppSelector(getUser)

  const navBar = isAuth ? <NavigationBar /> : null
  const content = isAuth ? <ContentLogged /> : <ContentNotLogged />

  return (
    <div className={styles.landing}>
      {navBar}
      <div className={styles.wrapper}>
        <img
          className={styles.logo}
          src={bombermanLogoImg}
          alt="bomberman-logo"
          draggable="false"
        />
        {content}
        <div className={styles.descriptionBottom}>
          Есть вопросы? Скорее переходи к нам на{' '}
          <Link className={styles.link} to="/forum">
            форум
          </Link>
        </div>
      </div>
      <img
        className={styles.heroImg}
        src={heroImg}
        alt="hero-img"
        draggable="false"
      />
    </div>
  )
}
