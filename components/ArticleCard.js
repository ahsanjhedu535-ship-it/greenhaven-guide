import Link from "next/link";
export default function ArticleCard({ article, compact = false }) {
  return (
    <Link className={compact ? "latest-item" : "article-card"} href={`/articles/${article.slug}`} > <img src={article.image} alt={article.title} /> <div className="article-card-copy"> <span className="tag">{article.category}</span> <h3>{article.title}</h3> <p>{article.excerpt}</p> <span className="read-link"> Read guide <span aria-hidden="true">→</span> </span> </div> </Link>
  );
}
