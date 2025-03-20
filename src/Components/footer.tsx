import { forwardRef } from "react";
import Correo from "../assets/Logos/Gmail_Icon.jpg";
import Whatsapp from "../assets/Logos/Whatsapp_icon.png";
import Github from "../assets/Logos/github-512.webp";

const Footer = forwardRef<HTMLDivElement>((_, ref) => {
  const outlook = "olvisEnmanuel00@gmail.com";
  return (
    <footer ref={ref} className="bg-transparent rounded-lg">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-around">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://github.com/OlvisM" className="hover:underline">
            Git™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <section className=" flex justify-center md:justify-start space-x-5 ml-10 ">
            <a href={`mailto:${outlook}?subject=`}>
              <img
                src={Correo}
                alt="Gmail"
                className="w-5 h-5 md:w-10 md:h-10 rounded-full border"
              />
            </a>
            <a href="https://github.com/OlvisM">
              <img
                src={Github}
                alt="GitHub"
                className="w-5 h-5 md:w-10 md:h-10"
              />
            </a>
            <a href="https://web.whatsapp.com/">
              <img
                src={Whatsapp}
                alt="WhatsApp"
                className="w-5 h-5 md:w-10 md:h-10"
              />
            </a>
          </section>
        </ul>
      </div>
    </footer>
  );
});
export default Footer;
