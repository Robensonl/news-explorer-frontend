function Preloader() {
  return (
    <div className="flex flex-col items-center justify-center py-20 md:py-32">
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-accent-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-text-secondary text-lg">Buscando noticias...</p>
    </div>
  );
}

export default Preloader;
