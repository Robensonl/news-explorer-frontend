function About() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800"
              alt="Autor"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Sobre el autor
            </h2>
            <p className="text-text-primary text-lg leading-relaxed mb-6">
              Este proyecto fue creado como parte del programa de desarrollo web de TripleTen. 
              Es una aplicación que permite a los usuarios buscar artículos de noticias mediante 
              la News API y guardar sus favoritos.
            </p>
            <p className="text-text-primary text-lg leading-relaxed mb-6">
              La aplicación está construida con React, utiliza React Router para la navegación, 
              y está estilizada con Tailwind CSS para un diseño moderno y responsivo.
            </p>
            <p className="text-text-primary text-lg leading-relaxed">
              Las características incluyen búsqueda de noticias, autenticación de usuarios, 
              y la capacidad de guardar y gestionar artículos favoritos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
