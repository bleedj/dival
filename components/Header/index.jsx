import React from 'react'
import cl from 'classnames'
import Nav from '../Nav'
import styles from './index.module.scss'
import Image from 'next/image'
import logo from '../../public/logos/svg/logo-no-background.svg'
function Header() {
    const favicon = 
        {
            id:1, 
            href: '/', 
            icon: logo,
        }
    
    return (
        <header className={styles.headerContainer}>
            <div className={styles.header}>
                <div className={styles.header__favContainer}>
                    <a href={favicon.href}>
                        <Image className={styles.header__image} src={logo} ></Image>
                    </a>
                </div>
                <Nav></Nav>
            </div>
        </header>
            
    )
}

export default Header