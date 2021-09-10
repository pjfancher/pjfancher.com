import Layout, { siteTitle } from 'components/layout'
import Container from 'components/container'
import Grid from 'components/grid'
import Test from 'components/test'
import LatestPosts from 'components/latest-posts'
import Sidebar from 'components/sidebar'
import { getArticleSlugs, getArticles } from 'lib/articles'

export default function Home({ articles }) {
  return (
	<Layout home>
		<Container>
			<Grid>
				<Test name='123'>
					<div className='testInner'>testInner</div>
				</Test>
				<LatestPosts articles={articles} />
				<Sidebar />
			</Grid>
		</Container>
	</Layout>
  ) // return
}


/* Static Props
*****************************************************************************/
export async function getStaticProps() {
  const articles = await getArticles()

  return {
		props: {
			articles
		} // props
  } // return
} // export
