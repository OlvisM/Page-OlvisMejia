import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import ListTec from "./ListTec";
import Galery from "./Galeria";
import Footer from "./footer";
import Header from "./Header";
import { useRef } from "react";
function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const TecnologiaRef = useRef<HTMLDivElement>(null);
  const ContacRef = useRef<HTMLDivElement>(null);
  const ProyectosRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <main className="overflow-hidden">
        <div className="flex justify-center items-center">
          <Header
            scrollToAbout={() => scrollToSection(aboutRef)}
            scrollToProyectos={() => scrollToSection(ProyectosRef)}
            scrollToTecnologias={() => scrollToSection(TecnologiaRef)}
            scrollToContac={() => scrollToSection(ContacRef)}
          />
        </div>
        <div className="flex justify-center items-center">
          <HomePage />
        </div>
        <div className="flex justify-center items-center">
          <AboutMe ref={aboutRef} />
        </div>
        <div className="flex justify-center items-center ">
          <ListTec ref={TecnologiaRef} />
        </div>
        <div className="flex justify-center items-center">
          <Galery ref={ProyectosRef} />
        </div>
        <div className="flex justify-center items-center mt-10">
          <Footer ref={ContacRef} />
        </div>
      </main>
    </>
  );
}

export default App;
