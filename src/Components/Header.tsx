import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Iconos de menú

interface HeaderProps {
  scrollToAbout: () => void;
  scrollToProyectos: () => void;
  scrollToTecnologias: () => void;
  scrollToContac: () => void;
}

const Hearder = ({
  scrollToAbout,
  scrollToProyectos,
  scrollToTecnologias,
  scrollToContac,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > lastScrollY && currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <>
      <header
        className={`bg-transparent text-gray-600 p-4 hadow-md w-full fixed top-0 left-75 md:left-0 z-50 transition-transform duration-200 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex md:justify-center items-center px-1 md:px-8">
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <nav
            className={`absolute md:relative top-16 md:top-0 right-10 md:right-0 w-full md:w-auto bg-transparent md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
              isOpen ? "block" : "hidden"
            } md:flex md:items-right`}
          >
            <ul
              id="span"
              className="flex font-bold space-x-8 flex-col p-4 md:p-0 mt-4 border-transparent rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-transparent"
            >
              <li>
                <a href="/" className="hover:text-black">
                  Inicio
                </a>
              </li>
              <>
                <li>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToAbout();
                    }}
                    className="hover:text-black"
                  >
                    Sobre mi
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToTecnologias();
                    }}
                    className="hover:text-black"
                  >
                    Tecnologia
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToProyectos();
                    }}
                    className="hover:text-black"
                  >
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToContac();
                    }}
                    className="hover:text-black"
                  >
                    Contactame
                  </a>
                </li>
              </>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Hearder;
