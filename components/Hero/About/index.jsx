import styles from './index.module.scss'
import React from 'react'

const text = 'Sed mollis odio urna, sit amet efficitur erat mollis eget. Quisque scelerisque, tellus nec gravida volutpat, turpis ante pretium. Morbi nec consequat elit, quis malesuada orci. Morbi commodo mauris id erat faucibus, vel fringilla tellus efficitur. Proin facilisis turpis pharetra dolor fermentum, ac ultrices mauris dignissim.'
export default function About() {

    return (
    <>
        <div  className={styles.about} id="about">
            <h2 className={styles.about__title}>About</h2>
            <h2 className={styles.about__content}>{text} <br /><p>{text}</p></h2>
        </div>
        
    </>
)
}
