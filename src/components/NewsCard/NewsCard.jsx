import { useState } from 'react';

function NewsCard({ article, isLoggedIn, isSaved, onSave, onRemove, showKeyword, keyword }) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSaveClick = () => {
    if (isSaved) {
      onRemove(article);
    } else {
      onSave(article);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const defaultImage = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600';

  return (
    <article 
      className="group bg-white rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img
          src={imageError ? defaultImage : article.urlToImage || defaultImage}
          alt={article.title}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay with buttons */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start">
          {/* Keyword badge (only on saved news page) */}
          {showKeyword && keyword && (
            <span className="bg-white text-primary-black px-4 py-2 rounded-full text-sm font-medium">
              {keyword}
            </span>
          )}
          
          {/* Save/Delete button */}
          <div className={showKeyword && keyword ? '' : 'ml-auto'}>
            {isLoggedIn ? (
              <button
                onClick={handleSaveClick}
                className="bg-white hover:bg-gray-100 rounded-full p-3 transition-colors duration-200 group/btn"
                aria-label={isSaved ? 'Eliminar de guardados' : 'Guardar artículo'}
              >
                {showKeyword ? (
                  // Icono de basura para saved news page
                  <svg className="w-6 h-6 stroke-primary-black group-hover/btn:stroke-red-500" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                ) : (
                  // Icono de bookmark para home page
                  <svg 
                    className={`w-6 h-6 transition-colors ${
                      isSaved ? 'fill-accent-blue stroke-accent-blue' : 'fill-none stroke-primary-black group-hover/btn:stroke-accent-blue'
                    }`}
                    viewBox="0 0 24 24" 
                    strokeWidth="2"
                  >
                    <path d="M5 7.8c0-2.2 0-3.3.5-4.1a4 4 0 0 1 1.7-1.7C8 1.5 9.1 1.5 11.3 1.5h1.4c2.2 0 3.3 0 4.1.5a4 4 0 0 1 1.7 1.7c.5.8.5 1.9.5 4.1v11.4c0 1.8 0 2.6-.5 3-.4.3-1 .3-1.5.1-.5-.3-.9-.9-1.8-2.1l-.8-1.2c-.3-.5-.5-.7-.7-.9a2 2 0 0 0-1.4-.5c-.3 0-.6.1-.9.3-.3.2-.5.4-.9.9l-.8 1.2c-.9 1.2-1.3 1.8-1.8 2-.5.3-1.1.3-1.5 0-.5-.3-.5-1.1-.5-2.9V7.8Z" />
                  </svg>
                )}
              </button>
            ) : (
              <div className="relative group/tooltip">
                <button
                  onClick={handleSaveClick}
                  className="bg-white hover:bg-gray-100 rounded-full p-3 transition-colors duration-200"
                  aria-label="Inicia sesión para guardar"
                >
                  <svg 
                    className="w-6 h-6 fill-none stroke-primary-black"
                    viewBox="0 0 24 24" 
                    strokeWidth="2"
                  >
                    <path d="M5 7.8c0-2.2 0-3.3.5-4.1a4 4 0 0 1 1.7-1.7C8 1.5 9.1 1.5 11.3 1.5h1.4c2.2 0 3.3 0 4.1.5a4 4 0 0 1 1.7 1.7c.5.8.5 1.9.5 4.1v11.4c0 1.8 0 2.6-.5 3-.4.3-1 .3-1.5.1-.5-.3-.9-.9-1.8-2.1l-.8-1.2c-.3-.5-.5-.7-.7-.9a2 2 0 0 0-1.4-.5c-.3 0-.6.1-.9.3-.3.2-.5.4-.9.9l-.8 1.2c-.9 1.2-1.3 1.8-1.8 2-.5.3-1.1.3-1.5 0-.5-.3-.5-1.1-.5-2.9V7.8Z" />
                  </svg>
                </button>
                {isHovered && (
                  <div className="absolute top-full right-0 mt-2 px-3 py-2 bg-primary-black text-white text-sm rounded-lg whitespace-nowrap z-10">
                    Inicia sesión para guardar artículos
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
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
