const Header = () => {
  return (
    <header
      id="header"
      className="flex justify-center w-full h-100 bg-no-repeat p-8" // Asegúrate de que la imagen está en 'public/'
    >
      <div className="w-300 h-60 ">
        <h1 id="title2" className="flex justify-center mt-10 font-bold">
          <span className="text-4xl md:text-7xl px-2">
            <span className="text-orange-600">OL</span>V
            <span className="text-orange-600">IS</span>
          </span>
          <span className="text-4xl md:text-7xl px-2 ">
            <span className="text-orange-600">EN</span>MA
            <span className="text-orange-600">NUEL</span>
          </span>
          <span className="text-4xl md:text-7xl px-2 ">
            M<span className="text-orange-600">EJI</span>A
          </span>
          <span className="text-4xl md:text-7xl px-2">
            <span className="text-orange-600">P</span>ARE
            <span className="text-orange-600">DES</span>
          </span>
        </h1>
        <h3 id="title2" className=" flex leading-tight justify-center mt-10">
          <span className="text-4xl md:text-5xl px-2">
            {" "}
            <span className="text-orange-600">F</span>r
            <span className="text-orange-600">o</span>nt-
            <span className="text-orange-600">E</span>nd
          </span>
          <span className="text-4xl md:text-5xl px-2">
            <span className="text-orange-600">De</span>vel
            <span className="text-orange-600">o</span>pe
            <span className="text-orange-600">r</span>
          </span>
        </h3>
      </div>
    </header>
  );
};

export default Header;
