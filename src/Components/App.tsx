import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import ListTec from "./ListTec";
import Galery from "./Galeria";
import Footer from "./footer";
import Header from "./Header";
function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <Header />
      </div>
      <div className="flex justify-center items-center mt-10">
        <HomePage />
      </div>
      <div className="flex justify-center items-center mt-10">
        <AboutMe />
      </div>
      <div className="flex justify-center items-center mt-10">
        <ListTec />
      </div>
      <div className="flex justify-center items-center mt-10">
        <Galery />
      </div>
      <div className="flex justify-center items-center mt-10">
        <Footer />
      </div>
    </>
  );
}

export default App;
