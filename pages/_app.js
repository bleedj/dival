import '../styles/reset.scss'
import '../styles/global.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Footer>Footer</Footer>
    </>
  )
}
