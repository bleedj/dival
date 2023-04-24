import React from 'react'
import styles from './index.module.scss'
import cl from 'classnames'
function Form() {
  return (
    <form className={styles.form} action="">
        <span className={styles.form__title}>Write me</span>
        <label className={styles.form__label} htmlFor="">
            Your name:
            <input className={styles.form__input} type="text" />
            Your e-mail:
            <input className={styles.form__input} type="email" />
            Your phone number:
            <input className={styles.form__input} type="tel" />
            Message:
            <textarea className={cl(styles.form__input ,styles.form__input_text)} type="text" />
            <button className={styles.form__button}>Order a callback</button>
        </label>
        
    </form>
  )
}

export default Form