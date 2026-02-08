import { Link } from "react-scroll";
import { motion } from "framer-motion";
const MotionLink = motion(Link);
const Header = () => { 
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50">
      <motion.div
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          
          {/* 2. Ampiasao ilay MotionLink vaovao eto */}
          <MotionLink 
            to="home" 
            smooth={true} 
            duration={800} 
            
            // Framer Motion animation
            whileHover={{ scale: 1.05, color: "rgb(59, 130, 246)" }} 
            whileTap={{ scale: 0.95 }} 
            transition={{ type: "spring", stiffness: 300 }} 
            
            // Styling
            className="text-3xl font-extrabold text-white cursor-pointer -ml-50"
          >
            Safidy Michel
            <span className="text-green-600 font-bold">.</span>
          </MotionLink>
          {/* FARA NY LOGO VAOVAO */}

          {/* ... Ny ambin'ny ul ... */}
          <ul className="flex space-x-10 text-white font-bold -mr-40 ">
            {/* ... Ireo Link-nao (Home, Projects, Resume, Contact) ... */}
            <li >
              <Link to="home" smooth={true} duration={900} className="cursor-pointer hover:text-green-600 transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={900} className="cursor-pointer hover:text-green-600 transition-colors duration-200 ">Projects</Link>
            </li>
            <li>
              <Link to="Resume" smooth={true} duration={900} className="cursor-pointer hover:text-green-600 transition-colors duration-200">Resume</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={900} className="cursor-pointer hover:text-green-600 transition-colors duration-200">Contact</Link>
            </li>
            
          </ul>         
        </div>
      </motion.div>
    </nav>
  );
};

export default Header;