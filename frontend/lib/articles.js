import path from 'path'
import { fetchAPI } from 'lib/api'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getArticles() {
  return await fetchAPI('/articles')
}

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

export async function getArticle(slug) {
  const data = await fetchAPI('/articles/{slug}')

  data
  return {
  }
}
