import { useState, useEffect } from "react";

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

const ListTec = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === words.length - 1 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <article className="w-300 border-2 rounded-3xl">
      <section className="flex justify-center ">
        <div>
          <h1 id="span" className="text-8xl text-bold">
            Tecnologias que manejo
          </h1>{" "}
          <div className="relative w-full flex justify-center items-center h-56 md:h-96">
            <h1 className="text-4xl font-bold transition-opacity duration-700 opacity-100">
              {words[currentIndex]}
            </h1>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ListTec;
