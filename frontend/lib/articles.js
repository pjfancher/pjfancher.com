import path from 'path'
import { fetchAPI } from 'lib/api'


/* Get Article Slugs
*****************************************************************************/
export async function getArticleSlugs() {
  const articles = await getArticles()
  return articles.map(article => {
		return {
			params: {
				slug: article.slug
			}
		}
  })
}

/* Get all articles
*****************************************************************************/
export async function getArticles() {
  return await fetchAPI('/articles')
}

/* Get single Article by slug
*****************************************************************************/
export async function getArticle(slug) {
  return await fetchAPI('/articles/' + slug)
}
