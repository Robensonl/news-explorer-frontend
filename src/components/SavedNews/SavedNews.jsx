import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import { extractKeywords } from '../../utils/auth';

function SavedNews({ userName, savedArticles, onRemoveArticle }) {
  const keywords = extractKeywords(savedArticles);

  if (savedArticles.length === 0) {
    return (
      <div className="py-20 text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <svg className="w-24 h-24 mx-auto text-text-secondary opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-3">
            No tienes artículos guardados aún
          </h3>
          <p className="text-text-secondary text-lg">
            Explora noticias y guarda tus artículos favoritos para leerlos más tarde.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SavedNewsHeader
        userName={userName}
        articlesCount={savedArticles.length}
        keywords={keywords}
      />
      
      <NewsCardList
        articles={savedArticles}
        isLoggedIn={true}
        savedArticles={savedArticles}
        onSaveArticle={() => {}}
        onRemoveArticle={onRemoveArticle}
        showKeyword={true}
        keyword={savedArticles[0]?.keyword}
      />
    </div>
  );
}

export default SavedNews;
