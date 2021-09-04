import Layout, { siteTitle } from 'components/layout'
import utilStyles from 'styles/utils.module.css'
import Link from 'next/link'
import Date from 'components/date'
import { getArticleSlugs, getArticles } from 'lib/articles'

export default function Home({ articles }) {
  return (
    <Layout home>
			<div className="">
				<div class="flex">

					<section className="latest-posts">
						<h2 className="">{siteTitle}</h2>
						<ul className="">
							{articles.map(article => (
								<li className="" key={article.id}>
									<Link href={`/articles/${article.slug}`}>
										<a>{article.title}</a>
									</Link>
									<br />
									<small className="">
										<Date dateString={article.published_at} />
									</small>
								</li>
							))}
						</ul>
					</section>
				</div>
			</div>
    </Layout>
  )
}

/* Static Props
*****************************************************************************/
export async function getStaticProps() {
  const articles = await getArticles()
	
  return {
    props: {
      articles
    }
  }
}
