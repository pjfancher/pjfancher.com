import Head from 'next/head'
import Layout from 'components/layout'
import Date from 'components/date'
import { getArticleSlugs, getArticle} from 'lib/articles'
import utilStyles from 'styles/utils.module.css'

export default function Article({post}) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{post.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={post.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getArticleSlugs()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = await getArticle(params.slug)
  return {
    props: {
      post
    }
  }
}