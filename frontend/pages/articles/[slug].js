import Head from 'next/head'
import Layout from 'components/layout'
import Date from 'components/date'
import { getArticleSlugs, getArticle} from 'lib/articles'
import utilStyles from 'styles/utils.module.css'

export default function Article({article}) {
  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{article.title}</h1>
        <div className={utilStyles.lightText}>
					<Date dateString={article.published_at} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.content}} />
      </article>
    </Layout>
  )
}


/* Static Props
*****************************************************************************/
export async function getStaticProps({ params }) {
  const article = await getArticle(params.slug)
  return {
    props: {
      article
    }
  }
}

/* Static Paths
*****************************************************************************/
export async function getStaticPaths() {
  const paths = await getArticleSlugs()

  return {
    paths,
    fallback: false
  }
}
