import styles from '../styles/index.module.scss'
import Hero from '@/components/Hero'
export default function Home() {
  return (
    <main className={styles.home}>
      <Hero/>
    </main>
  )
}
