import F3 from "../assets/Img/F3.png";
import F5 from "../assets/Img/F5.png";
import F6 from "../assets/Img/F6.png";

const Galeria = () => {
  return (
    <article className=" flex justify-center w-screen bg-gray-50 ">
      <section>
        <div id="span" className="flex justify-center">
          <h1 className="text-8xl">PROYECTOS</h1>
        </div>
        <div className="flex flex-cols-2 gap-6 w-300 mt-20">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="">
              <img
                className=" object-contain w-150"
                src={F6}
                alt="Sunset in the mountains"
              />
            </div>

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">TicTacToe</div>
              <p className="text-black text-justify text-base">
                Fue una practica donde me asignaron a hacer el profesor fue una
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
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="w-118">
              <img className="w-full " src={F3} alt="Sunset in the mountains" />
            </div>

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                G-Ministries(GlobalControl)
              </div>
              <p className="text-black text-justify text-base">
                Fue un pagian que me solicitaron hacer, donde me dieron la
                oprtunidad de hacer la pasadon, la pagina va orientada a una
                fundacion. Fue creada con React y Tailwindcss.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="w-120">
              <img className="w-full" src={F5} alt="Sunset in the mountains" />
            </div>

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">ITLA-TV+</div>
              <p className="text-black text-justify text-base">
                Fue una practica que me puso el profesor que fue como una pagina
                para subir peliculas, donde podia poner el titulo, imagen,
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
    </article>
  );
};
export default Galeria;
