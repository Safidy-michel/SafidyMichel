import { useEffect, useRef } from 'react';
import Typed from 'typed.js'; // 1. Tsy maintsy import-ina ny Typed
import { motion } from "framer-motion";
/*import { Laptop, Video, Send } from "lucide-react";*/

const Hero = () => {
  // 2. Mampiasa useRef mba hitazonana ny element DOM hiasan'ny Typed
  const typedRef = useRef(null);

  useEffect(() => {
    // 3. Famaritana ny options Typed.js
    const typedOptions = {
        strings: ['Frontend Enthusiast','Aspiring Backend Developer','Web Development Student'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
    };

    // 4. Manomboka ny Typed Instance
    const typed = new Typed(typedRef.current, typedOptions);

    // 5. Cleanup Function: Tena ZAVA-DEHIBE amin'ny React!
    return () => {
      // Esory ny Typed Instance rehefa miala ilay component.
      typed.destroy(); 
    };
  }, []); // 6. Avela ho banga ny dependency array, ka indray mandeha ihany no mandeha.

  return (
    <section>
      { }
      
      {/* 7. AMPIDIRO ETO NY REF! */}
     <motion.div
     className='text-5xl font-bold mb-5 text-white'
     >
        <motion.h2
             initial={{opacity:0 , y:50}}
             animate={{opacity:1 , y:0}}
             transition={{ delay: 0.5, duration: 1 }}
        >
            I'm <span className="multi-text text-lime-500" ref={typedRef}></span> 
        </motion.h2>
          {/*<span className="inline-flex items-center gap-2">
          <Laptop className="w-6 h-6 text-blue-400" /> Software Engineer
        </span>
        <span className="inline-flex items-center gap-2">
          <Video className="w-6 h-6 text-pink-400" /> Video Editor
        </span>*/}
         
        
     </motion.div>
    
      
      { }
    </section>
  );
};

export default Hero;