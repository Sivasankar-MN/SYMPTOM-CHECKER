import "./HealthArticleCard.css"

const HealthArticleCard = ({ article }) => {
  return (
    <div className="health-article-card">
      <div className="article-image-container">
        <img
          src={article.image || "/placeholder.svg?height=200&width=300"}
          alt={article.title}
          className="article-image"
        />
        <div className="article-date">{article.date}</div>
      </div>

      <div className="article-content">
        <h3 className="article-title">{article.title}</h3>
        <p className="article-excerpt">{article.excerpt}</p>
        <a href="#" className="read-more-link">
          Read More
        </a>
      </div>
    </div>
  )
}

export default HealthArticleCard

