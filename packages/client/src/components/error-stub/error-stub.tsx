import { HeroBomb } from '../hero-bomb/hero-bomb'

import styles from './error-stub.module.css'

export const ErrorStub = () => {
  return (
    <div className={styles.errorStub}>
      <p className={styles[`errorStub__text`]}>
        <span className={styles[`errorStub__text_danger`]}>БАААБАААХ!</span> И
        ВСЁ СЛОМАЛОСЬ!
      </p>
      <HeroBomb />
      <p className={styles[`errorStub__text`]}>НО МЫ УЖЕ ЧИНИМ!</p>
    </div>
  )
}
