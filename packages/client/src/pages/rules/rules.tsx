import React from 'react'
import styles from './rules.module.css'
import baseStyles from '../../app/app.module.css'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import { getUser } from '../../store/selectors'

export const Rules: React.FC = () => {
  const { isAuth } = useAppSelector(getUser)
  return (
    <section className={styles.rules}>
      <h2 className={styles.title}>Правила игры</h2>
      <p className={styles.text}>
        Главный персонаж игры - Бомбермен - робот, которому нужно сбежать с
        завода по производству бомб. Игрок должен управлять им на прямоугольном
        уровне, содержащем различные кирпичные блоки и монстров, передвигающихся
        по этим уровням. Одни из них имеют возможность проходить сквозь
        кирпичные блоки, другие передвигаются быстрее персонажа.
      </p>
      <p className={styles.text}>
        Бомбермен может класть бомбы, которые взрываются через несколько секунд.
        При уничтожении блоков на их месте могут появиться бонусы (увеличение
        количества бомб, которые можно ставить одновременно; последовательная
        детонация бомб; ускорение; прохождение сквозь кирпичные блоки;
        невосприимчивость к взрывам бомб; увеличение дальности взрыва бомб) или
        проход на следующий уровень в виде двери. Герой погибает при
        соприкосновении с врагом или от взрыва бомбы (если нет бонуса).
      </p>
      <p className={styles.text}>
        Цель игры - уничтожить всех врагов на уровне, найти дверь и пройти на
        следующий уровень за определённое время. Когда время заканчивается,
        появляются ускоренные враги(злобные монетки), которые могут убить
        бомбермена. Они также появляются при попытке взорвать дверь.
      </p>
      <div className={styles.buttons}>
        {isAuth && (
          <Link className={baseStyles.linkButton} to="/game">
            Играть
          </Link>
        )}
        <Link className={baseStyles.linkButton} to="/">
          На главную
        </Link>
      </div>
    </section>
  )
}
