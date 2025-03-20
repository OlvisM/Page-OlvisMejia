import { forwardRef } from "react";

const AboutMe = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <article
      ref={ref}
      className="flex justify-center items-center w-screen h-150 md:h-100 bg-gray-200 p-1"
    >
      <section className="w-300">
        <div className="text-left">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-800">
            ACERCA DE MÍ
          </h1>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center">
          <div className="md:w-200">
            <p className="text-justify text-gray-700 leading-relaxed">
              Me pongo en contacto con ustedes para expresar mi interés en una
              posible oportunidad laboral en su empresa. Soy un estudiante de
              Desarrollo de Software en el ITLA, y me encuentro en los últimos
              semestres de mi formación académica.
            </p>
            <p className="text-justify mt-4 text-gray-700 leading-relaxed">
              Estoy interesado en ampliar mis conocimientos y aplicarlos en el
              ámbito laboral. Soy una persona honesta, responsable y con
              empatía, y estoy seguro de que puedo aportar valor a su empresa.
            </p>
          </div>

          <section className="md:w-1/2">
            <h1 className="text-2xl font-bold text-gray-800">EDUCACIÓN</h1>

            <div className="mt-4">
              <h3 className="font-semibold text-gray-700">
                Instituto Tecnológico de las Américas
              </h3>
              <p className="text-gray-600">
                Tecnólogo en Desarrollo de Software | Estudiante activo de
                término.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-700">Politécnico</h3>
              <p className="text-gray-600">Bachiller | 2020</p>
            </div>
          </section>
        </div>
      </section>
    </article>
  );
});

export default AboutMe;
