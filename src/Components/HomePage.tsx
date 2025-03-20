import { forwardRef } from "react";
import Image1 from "../assets/Olvis2.jpg";

const HomePage = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <article
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-center h-170 p-4"
    >
      <div className="flex flex-col md:flex-row items-center max-w-4xl w-full space-y-6 md:space-y-0 md:space-x-10">
        <div className="w-32 h-30 md:w-150 md:h-130 flex-shrink-0">
          <img
            src={Image1}
            alt="Perfil"
            className="w-full h-full object-cover md:rounded-2xl rounded-full border-2 border-gray-300 shadow-2xl"
          />
        </div>

        <section className="text-center md:text-left">
          <h1
            id="span"
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            <span className="block">OLVIS ENMANUEL</span>
            <span className="mr-3">MEJÍA</span>
            <span>PAREDES</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium text-gray-500">
            <span>Front-End Developer</span>
          </p>
        </section>
      </div>
    </article>
  );
});

export default HomePage;
