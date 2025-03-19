const AboutMe = () => {
  return (
    <>
      <article className="flex justify-center h-100 w-screen bg-gray-200">
        <section className="w-300 mt-10">
          <div>
            <h1 id="span" className="text-8xl font-semibold">
              ACERCA DE MÍ
            </h1>
          </div>
          <div className="flex w-300">
            <div className="w-200">
              <p className="text-justify ">
                Me pongo en contacto con ustedes para expresar mi interés en una
                posible oportunidad laboral en su empresa. Soy un estudiante de
                Desarrollo de software en el (ITLA), y me encuentro en los
                últimos semestres de mi formación academica.
              </p>
              <p className="text-justify mt-5">
                Estoy interesado en ampliar mis conocimientos y aplicarlos en el
                ámbito laboral. Soy una persona honesta, responsable y con
                empatía, y estoy seguro de que puedo aportar valor a su empresa.
              </p>
            </div>
            <section className="flex  text-justify px-10">
              <div className="w-100">
                <div>
                  <h1 id="span" className="text-3xl font-semibold">
                    EDUCACION{" "}
                  </h1>
                  <h3 id="span" className="mt-3 font-semibold">
                    Instituto Tecnologico de las Americas.
                  </h3>
                  <p className="">
                    Tecnólogo en desarrollo de software | Actual Estudiante
                    activo de término.
                  </p>
                </div>
                <div className="mt-5">
                  <h1 id="span" className="font-semibold">
                    Politécnico
                  </h1>
                  <p> Bachiller | 2020</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </article>
    </>
  );
};
export default AboutMe;
