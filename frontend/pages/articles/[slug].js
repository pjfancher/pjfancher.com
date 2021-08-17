import Head from 'next/head'
import Layout from 'components/layout'
import Date from 'components/date'
import { getAllArticleSlugs, getArticleData } from 'lib/articles'
import utilStyles from 'styles/utils.module.css'

export default function Article({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllArticleSlugs()
  debugger
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getArticleData(params.id)
  return {
    props: {
      postData
    }
  }
}

