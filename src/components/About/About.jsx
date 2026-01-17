function About() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-content mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80" 
              alt="About NewsExplorer"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Acerca del autor
          </h2>

          <div className="space-y-4 text-text-primary text-lg leading-relaxed">
            <p>
              Este proyecto fue creado como parte del bootcamp de desarrollo web de TripleTen. 
              Combina todo lo aprendido sobre desarrollo front-end, incluyendo diseño responsivo, 
              trabajo con APIs, y creación de aplicaciones web interactivas.
            </p>

            <p>
              NewsExplorer es una aplicación web que permite a los usuarios buscar noticias 
              sobre cualquier tema utilizando la API de News. Los usuarios pueden registrarse, 
              iniciar sesión y guardar sus artículos favoritos para leerlos más tarde.
            </p>

            <p>
              El proyecto está construido con React, utiliza React Router para la navegación, 
              y está estilizado con Tailwind CSS. La aplicación se conecta con un backend 
              para gestionar la autenticación de usuarios y el almacenamiento de artículos guardados.
            </p>

            <p className="font-medium">
              Tecnologías utilizadas: React, React Router, Tailwind CSS, Vite, Node.js, Express, MongoDB
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
