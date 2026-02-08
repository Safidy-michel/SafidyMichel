import { motion, type Variants } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6"; 
import ProfileImage from "../assets/LUCARDO.png"; 
import  Hero  from "../fonction/Hero";

const Home = () => {
    
    // 💡 LOGIQUE HO AN'NY BORDER MIODINA (Framer Motion Variants)
    const borderVariants: Variants = { 
        animate: {
            rotate:10, 
            borderColor: "rgb(12 , 121 , 12)", 
            transition: { 
                duration: 10,
                ease: "anticipate",
                repeat: Infinity,
                repeatType: "mirror"
            },
        },
    };
    return(
            <section
                id="home"
                className="min-h-screen flex flex-col justify-center items-center text-center 
                           bg-gradient-to-b from-gray-600 to-gray-800
                           md:items-start md:text-left"
            >
                <div className="container mx-auto px-4 md:px-16 
                                flex flex-col md:flex-row items-center justify-between gap-12 w-full-mt-50"> 
                    
                    {/* 1. FARITRA MISY NY SORATRA SY LOGO */}
                    <div className="w-380 h-full"> 
                         
                        {/* ... motion.h1, motion.h2, motion.p ... (Tazony ny code anao) */}
                        <motion.h1 
                            className="text-8xl font-bold mb-4 text-white"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >Hello<span>,</span> I'm</motion.h1>
                        
                        <motion.h2 
                            className="text-8xl font-bold mb-8 text-green-600"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >Safidy Michel  </motion.h2>
                      { /*ilay animation kely */ }
                        <Hero />

                        {/* 💡 LOGO SOSIALY */}
                        <div className="ml-20 ">
                            <motion.div 
                            className="text-2xl text-black font-bold mt-10 ml-5 w-full"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            >
                        <div className="flex gap-6 mt-10 ">
                            <motion.a
                              href="Cv-de-SafidyMichel.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 rounded-xl bg-green-500/30 backdrop-blur-md text-white font-semibold shadow-lg border border-green-400/30 hover:scale-105 hover:shadow-2xl hover:bg-green-500 transition-all duration-300"
                            >
                               View CV
                            </motion.a>

                            <motion.a
                             href="Cv-de-SafidyMichel.pdf"
                             download
                             className="px-6 py-3 rounded-xl border border-green-400 text-green-400 font-semibold hover:bg-green-500 hover:text-black transition-all duration-300"
                           >
                               Download CV
                            </motion.a>
                        </div>


                            </motion.div>
                             <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.0, duration: 1 }}
                                className="flex justify-center md:justify-start mt-10  space-x-7 ml-15" 
                        >
                                <a href="https://www.facebook.com/lucardo.michel" target="_blank" rel="noopener noreferrer" className="text-5xl text-white font-bold hover:text-blue-900 transition-colors duration-300"><FaLinkedin /></a>
                                <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="text-5xl text-white font-bold  hover:text-black transition-colors duration-300"><FaGithub /></a>
                                <a href="https://www.facebook.com/lucardo.michel" target="_blank" rel="noopener noreferrer" className="text-5xl text-white font-bold  hover:text-blue-800 transition-colors duration-300"><FaFacebook /></a>
                                <a href="https://twitter.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" className="text-5xl text-white font-bold  hover:text-gray-950 transition-colors duration-300"><FaSquareXTwitter /></a>
                           </motion.div>
                        </div>
                    </div> 

                    {/* 2. FARITRA MISY NY SARY SY NY BORDER MIODINA */}
                    <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                        
                        {/* BORDER MIODINA (DIV IVELANY) */} 
                        <motion.div
                            className="w-72 h-72 md:w-96 md:h-96 rounded-full flex items-center justify-center 
                                       border-4 border-transparent p-1 shadow-2xl" 
                            
                            // ✅ AMPIASAINA IZAO NY VARIANTS SY INITIAL IHANY!
                            variants={borderVariants}
                            initial={{ rotate: 0, borderColor: "rgb(156, 163, 175)" }} 
                            animate="animate" 
                        >
                            {/* SARY (IMG ANATINY) */}
                            <motion.img
                                src={ProfileImage}
                                alt="Sariko - Safidy Michel"
                                className="w-full h-full object-cover rounded-full object-[50%_10%]"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8, duration: 1 }}
                            />
                        </motion.div>
                        
                    </div>
                </div>
            </section>
    )
}

export default Home;