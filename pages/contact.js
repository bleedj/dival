// import styles from '../styles/index.module.scss'
import Form from '@/components/Form'
import styles from '../styles/contact.module.scss'
export default function Contact() {
  return (
    <div className={styles.contact}> 
        <div className={styles.formPage}>
            <Form/>
        </div>
    </div>
    
  )
}
