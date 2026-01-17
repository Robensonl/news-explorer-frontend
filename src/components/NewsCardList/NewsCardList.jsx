import NewsCard from '../NewsCard/NewsCard';
import { useState } from 'react';

function NewsCardList({ articles }) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  if (articles.length === 0) {
    return (
      <div className="max-w-content mx-auto px-4 md:px-8 lg:px-16 py-20 text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <svg className="w-24 h-24 mx-auto text-text-secondary opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-3">
            No se encontraron resultados
          </h3>
          <p className="text-text-secondary text-lg">
            Lo sentimos, pero no encontramos nada que coincida con tu búsqueda.
          </p>
        </div>
      </div>
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
