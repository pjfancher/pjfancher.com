import Header from 'components/header'
import Footer from 'components/footer'
import styles from './layout.module.scss'
import Link from 'next/link'


export default function Layout(props) {
  return (
    <div className="main-container">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}
