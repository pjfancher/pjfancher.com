import Layout, { siteTitle } from 'components/layout'
import utilStyles from 'styles/utils.module.css'
import Link from 'next/link'
import Date from 'components/date'
import { getArticleSlugs, getArticles } from 'lib/articles'

export async function getStaticProps() {
  const articles = await getArticles()
  return {
    props: {
      articles
    }
  }
}
export default function Home({ articles }) {
  return (
    <Layout home>
		<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
			<h2 className={utilStyles.headingLg}>{siteTitle}</h2>
			<ul className={utilStyles.list}>
				{articles.map(article => (
					<li className={utilStyles.listItem} key={article.id}>
						<Link href={`/articles/${article.slug}`}>
							<a>{article.title}</a>
						</Link>
						<br />
						<small className={utilStyles.lightText}>
							<Date dateString={article.published_at} />
						</small>
					</li>
				))}
			</ul>
		</section>
    </Layout>
  )
}