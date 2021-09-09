import Head from 'next/head'
import Layout from 'components/layout'
import Date from 'components/date'
import Container from 'components/container'
import Grid from 'components/grid'
import Sidebar from 'components/sidebar'
import { getArticleSlugs, getArticle} from 'lib/articles'

export default function Article({article}) {
  return (
    <Layout>
			<Head>
				<title>{article.title}</title>
			</Head>
			<Container>
				<Grid>
					<article>
						<h1>{article.title}</h1>

						<Date dateString={article.published_at} />

						<div dangerouslySetInnerHTML={{ __html: article.content}} />
					</article>

					<Sidebar />

				</Grid>
			</Container>
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
