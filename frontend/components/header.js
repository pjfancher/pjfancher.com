import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'

const name = 'PJ Fancher'
const img = '/images/pj.webp'
export const siteTitle = "PJ's blog"

export default function Header({ children, home }) {
  return (
    <div className="header-container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <a>
            <Image
              priority
              src={img}
              className='header-image'
              height={108}
              width={108}
              alt={name}
            />
          </a>
        </Link>
        <h2>
          <Link href="/">
            <a>{name}</a>
          </Link>
        </h2>
      </header>
    </div>
  )
}
