import React from 'react'
import Link from 'next/link'
import cl from 'classnames'
import styles from './index.module.scss'
import { useRouter } from 'next/router';
function Nav({
  className,
}) {
  
  const navLinks = [
    {title: 'About', href: '/', id: 1},
    {title: 'Gallery', href: '/gallery', id: 2},
    {title: 'Contact', href: '/contact', id: 3}, 
    {title: 'artnow.ru', href: 'https://artnow.ru/ru/gallery/0/5779.html', id: 4},
    
    
  ];

  const {pathname} = useRouter()
  console.log(pathname)

  return (
    <nav className={cl(className, styles.nav)}>
      {navLinks.map((link) => (
        <Link href={link.href} key={link.id}>
          <a target={link.title === 'artnow.ru' ? '_blank' : '_self'} className={cl(styles.nav__link, pathname===link.href ? styles.nav__link_active : '')}>{link.title}</a>
        </Link>
      ))}
    </nav>
  )
}

export default Nav