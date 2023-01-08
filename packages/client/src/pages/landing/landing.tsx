import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../../components/button/button'

import styles from './landing.module.css'

export const Landing = () => {
  const displayName = 'Алекс'
  const [isAuth, setIsAuth] = useState(true)

  // Навигационная панель
  const NavBarLogged = () => (
    <div className={styles['landing__nav-bar']}>
      <img
        src="src/assets/images/avatar.png"
        alt="user-avatar"
        draggable="false"
      />
      <Link className={styles.landing__link} to="/profile">
        {displayName}
      </Link>
      <Link
        className={styles.landing__link}
        to="/"
        onClick={() => setIsAuth(false)}>
        Выйти
      </Link>
    </div>
  )

  // Содержание для авторизованных пользователей
  const ContentLogged = () => (
    <>
      <div className={styles.landing__description_top}>
        Привет {displayName}! <br />
        Спешим напомнить, что ты в любой момент можешь освежить свои знания по
        игре, перечитав{' '}
        <Link className={styles.landing__link} to="/rules">
          правила
        </Link>{' '}
        и посмотреть{' '}
        <Link className={styles.landing__link} to="/leaderboard">
          таблицу лидеров!
        </Link>
      </div>

      <Link to="/game">
        <Button>Погнали</Button>
      </Link>
    </>
  )

  // Содержание для неавторизованных пользователей
  const ContentNotLogged = () => (
    <>
      <div className={styles.landing__description_top}>
        Привет, мы рады приветствовать тебя! <br />
        Прежде чем ты начнёшь взрывать всё вокруг, загляни в{' '}
        <Link className={styles.landing__link} to="/rules">
          правила
        </Link>
        . Уверены, это поможет тебе возглавить нашу{' '}
        <Link className={styles.landing__link} to="/leaderboard">
          таблицу лидеров!
        </Link>
      </div>

      <div className={styles['landing__button-wrapper']}>
        <Link to="/sign-in">
          <Button>Войти</Button>
        </Link>

        <Link to="/sign-up">
          <Button>Зарегистрироваться</Button>
        </Link>
      </div>
    </>
  )

  const navBar = isAuth ? (
    <NavBarLogged />
  ) : (
    <div className={styles['landing__nav-bar_reservation']}></div>
  )

  const content = isAuth ? <ContentLogged /> : <ContentNotLogged />

  return (
    <div className={styles.landing}>
      {navBar}

      <div className={styles.landing__wrapper}>
        <img
          className={styles.landing__logo}
          src="src/assets/images/bomberman-logo.png"
          alt="bomberman-logo"
          draggable="false"
        />

        {content}

        <div className={styles.landing__description_bottom}>
          Есть вопросы? Скорее переходи к нам на{' '}
          <Link className={styles.landing__link} to="/forum">
            форум
          </Link>
        </div>
      </div>

      <div className={styles['landing__img-wrapper']}>
        <img
          className="landing__hero-img"
          src="src/assets/images/hero.png"
          alt="hero-img"
          draggable="false"
        />
      </div>
    </div>
  )
}
