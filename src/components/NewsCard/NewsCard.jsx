import { useState } from 'react';

function NewsCard({ article }) {
  const [imageError, setImageError] = useState(false);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const defaultImage = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600';

  return (
    <article 
      className="group bg-white rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img
          src={imageError ? defaultImage : article.urlToImage || defaultImage}
          alt={article.title}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 md:p-6">
        <time className="text-text-secondary text-sm mb-3 block">
          {formatDate(article.publishedAt)}
        </time>
        
        <h3 className="text-text-primary text-xl md:text-2xl font-bold mb-3 line-clamp-2 leading-tight">
          {article.title}
        </h3>
        
        <p className="text-text-primary text-base mb-4 line-clamp-3 leading-relaxed">
          {article.description || 'Sin descripción disponible'}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-text-secondary text-sm font-medium uppercase tracking-wider">
            {article.source?.name || 'Fuente desconocida'}
          </span>
          
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-blue hover:text-accent-blue-hover font-medium transition-colors duration-200"
          >
            Leer más →
          </a>
        </div>
      </div>
    </article>
  );
}

export default NewsCard;
