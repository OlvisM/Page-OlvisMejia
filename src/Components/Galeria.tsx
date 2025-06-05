import { forwardRef } from "react";
import F3 from "../assets/Img/F3.png";
import F5 from "../assets/Img/F5.png";
import F6 from "../assets/Img/F6.png";
import F7 from "../assets/Img/F7.png";

const Galeria = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <article
      ref={ref}
      className=" flex justify-center h-170 w-screen bg-gray-50 "
    >
      <section>
        <div id="span" className="flex justify-center">
          <h1 className="mt-10 text-6xl md:text-8xl">PROYECTOS</h1>
        </div>
        <section className="w-screen flex justify-evenly md:justify-center overflow-x-scroll md:overflow-auto">
          <div className=" w-screen grid grid-cols-4 gap-6 md:w-400 mt-20">
            <div className="max-w-sm rounded shadow-lg transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-100">
              <div className="w-96">
                <img className="" src={F6} alt="TicTacToe" />
              </div>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">TicTacToe</div>
                <p className="text-black text-justify text-base">
                  Es una practica donde me asignaron a hacer el profesor fue una
                  practica Muy buena. Fue creado con C#.{" "}
                  <a
                    className="ml-3 text-blue-400"
                    href="https://github.com/OlvisM/Proyectofinal_TicTacToe"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-100">
              <img
                className="object-cover w-200 rounded-t-lg md:h-60 md:w-95 md:rounded-none md:rounded-s-lg"
                src={F7}
                alt="PelisPopulars"
              />

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">PeliPopulars</div>
                <p className="text-black text-justify text-base">
                  Es una practica que quise hacer para aprender a usar el fetch
                  para consumir una api de peliculas, donde podia poner el
                  titulo, imagen y descripcion. Fue creado en React y
                  tailwindcss.
                  <a
                    className="ml-3 text-blue-400"
                    href="https://pelipopulars.netlify.app/"
                  >
                    Sitio Web
                  </a>
                </p>
              </div>
            </div>
            <div className=" max-w-sm rounded overflow-hidden shadow-lg transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-100">
              <div className="w-118">
                <img className="w-full" src={F3} alt="Gministries" />
              </div>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  G-Ministries(GlobalControl)
                </div>
                <p className="text-black text-justify text-base">
                  Es una pagina que me solicitaron hacer en esa empresa para una
                  fundacion que piensan formalisar, donde me dieron la
                  oportunidad de hacer la pasadon. Fue creada con React y
                  Tailwindcss.
                </p>
                <a
                  className="ml-3 text-blue-400"
                  href="https://g-ministries.netlify.app/"
                >
                  Sitio Web
                </a>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-100">
              <div className="w-120">
                <img
                  className="w-full"
                  src={F5}
                  alt="Sunset in the mountains"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">ITLA-TV+</div>
                <p className="text-black text-justify text-base">
                  Es una pagina para subir titulos de peliculas, donde pude
                  aprender como conectar pases de datos con el front y poder
                  usar el modelo MVC, donde puedo poner el titulo, imagen,
                  descripcion, trailer etc. Fue creado en C# y SQLServer.
                  <a
                    className="ml-3 text-blue-400"
                    href="https://github.com/OlvisM/Itla_tv"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </article>
  );
});
export default Galeria;
