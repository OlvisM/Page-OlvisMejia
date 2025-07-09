import { forwardRef } from "react";
import F3 from "../assets/Img/F3.png";
import F5 from "../assets/Img/F5.png";
import F6 from "../assets/Img/F6.png";
import F7 from "../assets/Img/F7.png";

const Galeria = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <article ref={ref} className="flex justify-center bg-gray-50 py-10">
      <section className="w-full max-w-screen-xl px-4">
        <div id="span" className="flex justify-center">
          <h1 className="mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            PROYECTOS
          </h1>
        </div>

        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card
            imgSrc={F6}
            title="TicTacToe"
            description="Es una práctica donde me asignaron a hacer el profesor. Fue una práctica muy buena. Fue creado con C#."
            link="https://github.com/OlvisM/Proyectofinal_TicTacToe"
            linkText="GitHub"
          />
          <Card
            imgSrc={F7}
            title="PeliPopulars"
            description="Es una práctica que quise hacer para aprender a usar fetch para consumir una API de películas. Fue creado en React y Tailwind CSS."
            link="https://pelipopulars.netlify.app/"
            linkText="Sitio Web"
          />
          <Card
            imgSrc={F3}
            title="G-Ministries(GlobalControl)"
            description="Es una página que me solicitaron hacer para una fundación. Fue creada con React y Tailwind CSS."
            link="https://g-ministries.netlify.app/"
            linkText="Sitio Web"
          />
          <Card
            imgSrc={F5}
            title="ITLA-TV+"
            description="Es una página para subir títulos de películas y aprender a conectar datos con el front usando MVC. Fue creada en C# y SQL Server."
            link="https://github.com/OlvisM/Itla_tv"
            linkText="GitHub"
          />
        </section>
      </section>
    </article>
  );
});
export default Galeria;

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const Card = ({ imgSrc, title, description, link, linkText }: CardProps) => (
  <section className="w-full rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 bg-white">
    <div className="w-full h-48 overflow-hidden">
      <img className="w-full h-full object-cover" src={imgSrc} alt={title} />
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-black text-justify text-base">
        {description}
        <a
          className="ml-3 text-blue-500 hover:underline"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      </p>
    </div>
  </section>
);
