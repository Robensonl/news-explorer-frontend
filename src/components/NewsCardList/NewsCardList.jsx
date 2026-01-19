import NewsCard from '../NewsCard/NewsCard';
import { useState } from 'react';

function NewsCardList({ articles, isLoggedIn, savedArticles, onSaveArticle, onRemoveArticle, showKeyword, keyword }) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const isArticleSaved = (article) => {
    return savedArticles.some(saved => saved.url === article.url);
  };

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  if (articles.length === 0) {
    return (
      <section className="bg-background-light py-20">
        <div className="max-w-content mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-xl mx-auto text-center">
            <div className="mb-8">
              {/* Ícono de lupa con X */}
              <svg className="w-32 h-32 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                <path strokeLinecap="round" strokeWidth="2" d="M21 21l-4.35-4.35"/>
                <path strokeLinecap="round" strokeWidth="2.5" d="M8 8l6 6m0-6l-6 6"/>
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              No se encontró nada
            </h3>
            <p className="text-text-secondary text-lg md:text-xl">
              Lo sentimos, pero no hay nada que coincida<br />con tus términos de búsqueda.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background-light py-16 md:py-20">
      <div className="max-w-content mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12">
          Resultados de búsqueda
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleArticles.map((article, index) => (
            <NewsCard
              key={`${article.url}-${index}`}
              article={article}
              isLoggedIn={isLoggedIn}
              isSaved={isArticleSaved(article)}
              onSave={onSaveArticle}
              onRemove={onRemoveArticle}
              showKeyword={showKeyword}
              keyword={keyword}
            />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleShowMore}
              className="px-8 py-3 bg-white text-primary-black border-2 border-primary-black rounded-full font-medium hover:bg-primary-black hover:text-white transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Mostrar más
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default NewsCardList;
