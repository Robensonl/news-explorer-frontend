import authorImg from '../../assets/images/author.png';

function About() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <img
              src={authorImg}
              alt="Robenson Louissaint"
              className="rounded-full shadow-lg w-48 h-48 md:w-80 md:h-80 object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Sobre el autor
            </h2>
            <p className="text-text-primary text-lg leading-relaxed mb-6">
              <span className="font-semibold">Robenson Louissaint</span> es desarrollador web con experiencia en construir aplicaciones modernas y responsivas. 
              Este proyecto permite a los usuarios buscar artículos de noticias mediante la News API, guardarlos como favoritos y gestionarlos fácilmente.
            </p>
            <p className="text-text-primary text-lg leading-relaxed mb-6">
              La aplicación está creada con <span className="font-semibold">React</span>, utiliza <span className="font-semibold">React Router</span> para la navegación y está estilizada con <span className="font-semibold">Tailwind CSS</span> para un diseño actual y adaptable.
            </p>
            <ul className="text-text-primary text-lg leading-relaxed list-disc ml-6">
              <li>Búsqueda avanzada de noticias en tiempo real</li>
              <li>Gestión de favoritos y autenticación de usuarios</li>
              <li>Interfaz amigable adaptable a cualquier dispositivo</li>
            </ul>
            <div className="mt-6 flex gap-6">
              <a 
                href="https://github.com/Robensonl/news-explorer-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-blue transition-colors font-semibold"
              >
                GitHub
              </a>
              <a 
                href="https://robensonl.github.io/robenson_portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-blue transition-colors font-semibold"
              >
                Portafolio
              </a> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;