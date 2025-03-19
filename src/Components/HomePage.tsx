import Image1 from "../assets/Olvis2.jpg";
import git from "../assets/Logos//github-512.webp";
import gmail from "../assets/Logos/Gmail_Icon.jpg";
import whatsapp from "../assets/Logos/Whatsapp_icon.png";

const HomePage = () => {
  return (
    <>
      <article className=" max-w-screen max-h-screen overflow-hidden">
        <div className=" w-300 flex flex-col md:flex-row">
          <div className="flex-shrink-0">
            <img
              src={Image1}
              alt=""
              className="object-contain max-w-screen md:w-150 h-150 md:max-h-screen"
            />
          </div>
          <section className=" md:ml-1">
            <h1>
              <span className="text-4xl md:text-7xl">OLVIS</span>
              <br />
              <span className="text-4xl md:text-7xl">ENMANUEL</span>
              <br />
              <span className="text-4xl md:text-7xl">MEJIA</span>
              <span className="text-4xl md:text-7xl ml-4">PAREDES</span>
            </h1>
            <div>
              <h3 className="mt-5">
                <span className="text-2xl md:text-4xl">
                  Tecnologo en Desarrollo de Sotfware
                </span>
              </h3>
              <section className="mt-30 ml-30 flex flex-row space-x-5">
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                  <img
                    src={gmail}
                    alt=""
                    className="w-8 h-8 md:w-16 md:h-16 rounded-full"
                  />
                </a>
                <a href="https://github.com/OlvisM">
                  <img src={git} alt="" className="w-8 h-8 md:w-16 md:h-16" />
                </a>
                <a href="https://web.whatsapp.com/">
                  <img
                    src={whatsapp}
                    alt=""
                    className="w-8 h-8 md:w-16 md:h-16 "
                  />
                </a>
              </section>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};
export default HomePage;
