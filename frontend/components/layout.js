import Header from 'components/header'
import Footer from 'components/footer'
import styles from './layout.module.css'
import Link from 'next/link'


export default function Layout({ children, home }) {
  return (
    <div className="main-container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
