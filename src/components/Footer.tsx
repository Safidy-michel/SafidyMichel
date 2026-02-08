import { motion } from "framer-motion";
// Tsy ilaina ny Link, FaFacebook, sns. raha tsy ampiasaina
// Esory ny 'import { Link } from "react-scroll";' raha tsy ampiasainao eto intsony

const Footer = () => {
    
    // Mety hampiasa Framer Motion kely mba hiseho tsara
    const footerVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.8, 
                delay: 0.2
            } 
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            id="footer"
            className="bg-gray-950 text-white border-t border-gray-800"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            {/* NOFOHEZINA NY PY-8 HOE PY-4 MBA HAHATONGA AZY KELY KOKOA */}
            <div className="max-w-6xl mx-auto px-4 py-4"> 
                
                <div className="text-center text-gray-500 text-sm">
                    {/* Nofintinina mba tsy ho lava be loatra */}
                    &copy; {currentYear} Safidy Michel. All rights reserved. 
                   <span className="block sm:inline mt-1 sm:mt-0 sm:ml-4">
                       Crafted with <strong>React</strong> and <strong>TypeScript</strong>, styled by <strong>Tailwind CSS</strong>.
                   </span>
                </div>
                
            </div>
        </motion.footer>
    );
}

export default Footer;