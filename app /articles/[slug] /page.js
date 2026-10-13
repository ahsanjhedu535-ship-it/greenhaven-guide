import Link from "next/link";
import { articles } from "@/lib/articles";
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article)
    return (
      <main className="article-page"> <h1>Guide not found</h1> <Link href="/">Return home</Link> </main>
    );
  return (
    <> <header className="simple-header"> <Link href="/">♧ GreenHaven Guide</Link> <Link href="/">← Home</Link> </header> <main className="article-page"> <span className="eyebrow green"> {article.category} · {article.date} </span> <h1>{article.title}</h1> <p className="article-intro">{article.intro}</p> <img className="article-hero-image" src={article.image} alt={article.title} /> {article.sections.map(([heading, body]) => ( <section key={heading}> <h2>{heading}</h2> <p>{body}</p> </section> ))} <div className="article-note"> <b>A helpful reminder</b> <p> Plant needs vary by variety, climate, season, and growing conditions. Check local guidance and the instructions provided with your seeds or plants. </p> </div> <Link className="back-link" href="/"> ← Back to GreenHaven Guide </Link> </main> <footer> <Link href="/">GreenHaven Guide</Link> <small>Grow a little more green.</small> </footer> </>
  );
}
