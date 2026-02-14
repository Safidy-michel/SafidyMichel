import Header  from "./components/Header";
import Home from "./contents/Home";
import Contact  from "./contents/Contact";
import Resume from "./contents/Resume"
import Projet from "./contents/Projet";
import  Footer  from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
      
      <Header />
      <Home />
      <Projet />
      <Resume />
      <Contact />
      <Footer />

    </div>
  );
}

