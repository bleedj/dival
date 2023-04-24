import React from 'react'
import styles from './index.module.scss'
import Form from '../Form'
import Image from 'next/image'
import logo from '../../public/logos/svg/logo-no-background.svg'
function Footer() {
  const favicon = 
  {
      id:1, 
      href: '/', 
      icon: logo,
  }
  
  return (
    
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.footer__logo}>
          <a href={favicon.href}>
            <Image className={styles.header__image} src={logo} width={'225%'}></Image>
          </a>
        </div>
        <div className={styles.footer__form}>
          
          {/* <Form></Form> */}
        </div>
        <div>
          ''sdddssd
        </div>
        {/* <Textarea></Textarea> */}
      </div>
    </footer>
  )
}

export default Footer