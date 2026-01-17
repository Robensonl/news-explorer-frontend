function SavedNewsHeader({ userName, savedCount, keywords }) {
  const getTopKeywords = () => {
    if (!keywords || keywords.length === 0) return '';
    
    if (keywords.length === 1) {
      return keywords[0];
    } else if (keywords.length === 2) {
      return `${keywords[0]} y ${keywords[1]}`;
    } else {
      const remaining = keywords.length - 2;
      return `${keywords[0]}, ${keywords[1]} y ${remaining} más`;
    }
  };

  return (
    <section className="bg-background-light py-16 md:py-20">
      <div className="max-w-content mx-auto px-4 md:px-8 lg:px-16">
        <p className="text-text-secondary text-lg mb-4">
          Artículos guardados
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
          {userName}, tienes {savedCount} {savedCount === 1 ? 'artículo guardado' : 'artículos guardados'}
        </h1>
        
        {keywords && keywords.length > 0 && (
          <p className="text-text-primary text-lg">
            Por palabras clave:{' '}
            <span className="font-bold">{getTopKeywords()}</span>
          </p>
        )}
      </div>
    </section>
  );
}

export default SavedNewsHeader;
