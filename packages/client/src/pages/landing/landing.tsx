import { Link } from 'react-router-dom'

import { useAppSelector } from '../../store/hooks'
import { getUser } from '../../store/selectors'
import { NavigationBar } from '../../components/navigation-bar/navigation-bar'

import baseStyles from '../../app/app.module.css'
import styles from './landing.module.css'

// Содержание для авторизованных пользователей
const ContentLogged = () => {
  const { displayName } = useAppSelector(getUser)

  return (
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
      <Link className={baseStyles.link_button} to="/game">
        Погнали
      </Link>
    </>
  )
}

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
      <Link className={baseStyles.link_button} to="/sign-in">
        Войти
      </Link>
      <Link className={baseStyles.link_button} to="/sign-up">
        Зарегистрироваться
      </Link>
    </div>
  </>
)

export const Landing = () => {
  const { isAuth } = useAppSelector(state => state.user)

  const navBar = isAuth ? <NavigationBar /> : null
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
      <img
        className={styles['landing__hero-img']}
        src="src/assets/images/hero.png"
        alt="hero-img"
        draggable="false"
      />
    </div>
  )
}
