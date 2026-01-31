function Preloader() {
  return (
    <div className="flex flex-col items-center justify-center py-20 md:py-32 min-h-[400px] bg-background-light">
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-accent-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-text-secondary text-lg font-medium">Buscando noticias...</p>
      <p className="text-text-secondary text-sm mt-2">Esto puede tomar unos segundos</p>
    </div>
  );
}

export default Preloader;
