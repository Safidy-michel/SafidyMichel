import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => {
  const FORMSPREE_ACTION_URL = "https://formspree.io/f/movkeywy";
return (
<section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center 
                           bg-gradient-to-b from-gray-600 to-gray-800
                           md:items-start md:text-left">
<div className="flex flex-col lg:flex-row gap-50 justify-center items-start ml-90">
 
    <div className="container min-w-[550px] px-4 py-16 
                max-w-3xl md:max-w-xl border-dashed
                w-full
                border-3 border-green-500 rounded-xl ">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">Contact <span className="text-green-500 font-bold">Me</span></h2>
         <motion.form
            action={FORMSPREE_ACTION_URL} 
            method="POST" 

          className="max-w-lg mx-auto flex flex-col space-y-4 text-slate-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-400"
          />
          <textarea
          name="message"
            placeholder="Votre message"
            rows={4}
            className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white py-3 rounded-xl hover:bg-green-800 transition cursor-pointer font-bold"
          >
            Envoyer
          </button>
        </motion.form>
     </div>

     <div className="min-w-[700px] p-8 mt-20 text-white 
                 flex flex-col justify-center min-h-[200px] space-y-6"> 
                 {/* 💡 Nampidirina flex-col sy space-y-6 ho an'ny elanelana */}
    
    {/* 1. EMAIL */}
    <div className="flex items-center space-x-4">
        <FaEnvelope className="text-green-500 text-2xl" /> 
        <p className="text-lg ">michelsafidy08@gmail.com</p>
    </div>
    
    {/* 2. PHONE */}
    <div className="flex items-center space-x-4">
        <FaPhone className="text-green-500 text-2xl" />
        <p className="text-lg">(+261) 34 78 155 16</p>
    </div>

    {/* 3. ADDRESS */}
    <div className="flex items-center space-x-4">
        <FaMapMarkerAlt className="text-green-500 text-2xl" />
        <p className="text-lg">Ankadindramamy Lot II H12 RDBA, Antananarivo, Madagascar</p>
    </div>

</div>
     </div>
      </section>
      )
}

export default Contact;