import { motion } from "framer-motion";
import { useState } from "react";

const Resume = () => {

const [activeTab,setActiveTab] = useState("Experience");

const tabs = ["Experience","Formation","Tech Stack","About"];

const renderContent = () => {

switch(activeTab){

case "Experience":
return(

<div className="space-y-12 ">

<div className="border-l-2 border-green-500 pl-6">
<h3 className="text-xl font-bold">Smart-Collab Platform</h3>
<p className="text-gray-400">2025 — 2026</p>
<p className="text-gray-300 mt-2">
Plateforme collaborative avec dashboards dynamiques,
gestion sécurisée et automatisation workflow.
</p>
</div>

<div className="border-l-2 border-green-500 pl-6">
<h3 className="text-xl font-bold">Gestion Salles d’Examen ISPM</h3>
<p className="text-gray-400">2024 — 2025</p>
<p className="text-gray-300 mt-2">
Architecture POO TypeScript avec affectation automatique.
</p>
</div>

<div className="border-l-2 border-green-500 pl-6">
<h3 className="text-xl font-bold">SmartHotel API</h3>
<p className="text-gray-400">2024 — 2025</p>
<p className="text-gray-300 mt-2">
ASP.NET Core Web API avec architecture Controller-Service-Repository.
</p>
</div>

</div>

);

case "Formation":
return(

<div className="space-y-6">

<div>
<h3 className="font-bold text-lg">
Licence — Électronique, Systèmes Informatiques et IA
</h3>
<p className="text-gray-300">Institut Supérieur Polytechnique de Madagascar</p>
</div>

<div>
<h3 className="font-bold text-lg">
Baccalauréat Scientifique Série D
</h3>
</div>

</div>

);

case "Tech Stack":
return(

<div className="grid md:grid-cols-2 gap-10">

<div>
<h4 className="text-green-400 font-bold mb-3">Frontend</h4>
<p>React • Angular • TailwindCSS</p>
</div>

<div>
<h4 className="text-green-400 font-bold mb-3">Backend</h4>
<p>ASP.NET Core • Node.js • Express</p>
</div>

<div>
<h4 className="text-green-400 font-bold mb-3">Languages</h4>
<p>C# • TypeScript • JavaScript • Java • C</p>
</div>

<div>
<h4 className="text-green-400 font-bold mb-3">Databases</h4>
<p>MongoDB • MySQL • Firebase</p>
</div>

</div>

);

case "About":
return(
<p className="text-gray-300 leading-relaxed">
Développeur full-stack passionné spécialisé en React,
Angular, ASP.NET Core et Node.js. Conception
d’applications modernes avec architecture propre,
scalable et orientée performance.
</p>
);

}

};

return(

<section id="Resume" className="min-h-screen bg-black text-white p-10 flex items-center justify-center">

<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

{/* SIDEBAR */}

<div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-xl">

<h2 className="text-3xl font-bold mb-8">Resume</h2>

{tabs.map(tab=>(

<motion.button
key={tab}
whileHover={{ scale:1.05 }}
onClick={()=>setActiveTab(tab)}
className={`w-full text-left p-3 rounded-xl mb-3 transition ${
activeTab===tab
? "bg-green-500 text-black font-bold"
: "hover:bg-white/10 text-gray-300"
}`}
>
{tab}
</motion.button>

))}

</div>

{/* CONTENT */}

<motion.div
key={activeTab}
initial={{ opacity:0, y:30 }}
animate={{ opacity:1, y:0 }}
className="md:col-span-3 p-10 rounded-3xl 
bg-white/5 backdrop-blur-xl
border border-green-500/20
shadow-[0_0_50px_rgba(34,197,94,0.2)]"
>

{renderContent()}

</motion.div>

</div>

</section>

);

};

export default Resume;
