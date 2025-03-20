import { useState, useEffect, forwardRef } from "react";

const words = [
  "C# .NET",
  "SQL Server",
  "JavaScript",
  " HTML5",
  " CSS3",
  " React.js",
  "React Native",
  "Git",
  "Figma",
  "Microfoft Office",
  "Adaptación Responsabilidad",
  "Capacidad de análisis",
  " Patrones de diseño",
  " Arquitectura onion",
  " Entity Frameworck",
]; // Lista de palabras

const ListTec = forwardRef<HTMLDivElement>((_, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === words.length - 1 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <article ref={ref} className="w-screen bg-gray-400">
      <section className="flex justify-center ">
        <div className="mt-10">
          <h1
            id="span"
            className=" font-semibold text-2xl md:text-8xl mt-2 md:mt-0 "
          >
            TECNOLOGIAS QUE MANEJO
          </h1>
          <div className="relative w-full flex justify-center items-center h-56 md:h-96">
            <h1
              id="title2"
              className="text-2xl md:text-4xl font-bold transition-opacity duration-700 opacity-100"
            >
              {words[currentIndex]}
            </h1>
          </div>
        </div>
      </section>
    </article>
  );
});

export default ListTec;
