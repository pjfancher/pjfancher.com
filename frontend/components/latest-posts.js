import Link from 'next/link'
import Date from 'components/date'

const h2 = 'Latest posts'

export default function LatestPosts({ children, articles }) {
  return (
    <section className="latest">
      <h2 className="">{h2}</h2>
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
  )
}
