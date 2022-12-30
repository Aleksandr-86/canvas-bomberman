import { Link } from 'react-router-dom'

import styles from './landing.module.css'

export const Landing = () => {
  const isAuth = false
  const displayName = 'Алекс'

  let content: JSX.Element

  if (isAuth) {
    content = (
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
          <button className={styles.landing__button}>Погнали</button>
        </Link>
      </>
    )
  } else {
    content = (
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
            <button className={styles.landing__button}>Войти</button>
          </Link>

          <Link to="/sign-up">
            <button className={styles.landing__button}>
              Зарегистрироваться
            </button>
          </Link>
        </div>
      </>
    )
  }

  return (
    <div className={styles.landing}>
      <div className={styles.landing__wrapper}>
        <img
          className={styles.landing__logo}
          src="src/assets/images/bomberman-logo.png"
          alt="bomberman-log"
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
        <img className="landing__hero-img" src="src/assets/images/hero.png" />
      </div>
    </div>
  )
}
