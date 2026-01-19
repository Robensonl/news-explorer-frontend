function SavedNewsHeader({ userName, articlesCount, keywords }) {
  const getKeywordsText = () => {
    if (keywords.length === 0) return '';
    if (keywords.length <= 2) return keywords.join(', ');
    if (keywords.length === 3) return keywords.join(', ');
    
    const remaining = keywords.length - 2;
    return `${keywords[0]}, ${keywords[1]} y ${remaining} más`;
  };

  return (
    <section className="bg-background-light py-16 md:py-20">
      <div className="max-w-content mx-auto px-4 md:px-8 lg:px-16">
        <p className="text-text-secondary text-lg mb-4">
          Artículos guardados
        </p>
        
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
          {userName}, tienes {articlesCount} {articlesCount === 1 ? 'artículo guardado' : 'artículos guardados'}
        </h1>
        
        {keywords.length > 0 && (
          <p className="text-text-primary text-lg">
            Por palabras clave:{' '}
            <span className="font-bold">{getKeywordsText()}</span>
          </p>
        )}
      </div>
    </section>
  );
}

export default SavedNewsHeader;
