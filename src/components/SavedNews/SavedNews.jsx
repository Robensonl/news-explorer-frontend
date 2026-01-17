import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCard from '../NewsCard/NewsCard';

function SavedNews({ userName, savedArticles, onRemoveArticle }) {
  // Extract unique keywords from saved articles
  const getKeywords = () => {
    const keywordCounts = {};
    savedArticles.forEach(article => {
      if (article.keyword) {
        keywordCounts[article.keyword] = (keywordCounts[article.keyword] || 0) + 1;
      }
    });
    
    return Object.entries(keywordCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([keyword]) => keyword);
  };

  const keywords = getKeywords();

  return (
    <>
      <SavedNewsHeader 
        userName={userName}
        savedCount={savedArticles.length}
        keywords={keywords}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 md:px-8 lg:px-16">
          {savedArticles.length === 0 ? (
            <div className="text-center py-20">
              <div className="mb-6">
                <svg className="w-24 h-24 mx-auto text-text-secondary opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">
                No hay artículos guardados todavía
              </h3>
              <p className="text-text-secondary text-lg">
                Empieza a buscar noticias y guarda tus favoritos aquí
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {savedArticles.map((article, index) => (
                <NewsCard
                  key={`${article.url}-${index}`}
                  article={article}
                  isLoggedIn={true}
                  isSaved={true}
                  onRemove={onRemoveArticle}
                  showKeyword={true}
                  keyword={article.keyword}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default SavedNews;
