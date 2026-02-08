import { motion } from "framer-motion";

const Projet = () => {

const projects = [

{
title:"Smart-Collab & Task Management Platform",
desc:"Plateforme collaborative avec dashboards dynamiques et automatisation workflow.",
tech:["React","Node.js","Express","MongoDB","Tailwind"],
github:"#",
demo:"#"
},

{
title:"Gestion des Salles d’Examen ISPM",
desc:"Architecture POO TypeScript avec affectation automatique des étudiants.",
tech:["TypeScript","POO"],
github:"#",
demo:"#"
},

{
title:"SmartHotel API",
desc:"API REST ASP.NET Core avec architecture Controller-Service-Repository.",
tech:["C#","ASP.NET Core","Web API"],
github:"#",
demo:"#"
},

];

return(

<section
id="projects"
className="
min-h-screen
from-gray-900 to-gray-900
text-white
flex
flex-col
justify-center
pt-32 pb-24
"
>

<h2 className="text-4xl font-bold text-center mb-20 text-green-400">
Mes Projets
</h2>

<div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">

{projects.map((project,index)=>(

<motion.div
key={index}
whileHover={{ scale:1.05, rotateX:5, rotateY:-5 }}
transition={{ type:"spring", stiffness:200 }}
className="
relative
p-6
rounded-3xl
bg-white/5
backdrop-blur-xl
border border-green-500/20
shadow-[0_0_40px_rgba(34,197,94,0.15)]
hover:shadow-[0_0_60px_rgba(34,197,94,0.3)]
"
>

{/* Glow background */}

<div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl pointer-events-none"></div>

<h3 className="text-xl font-bold mb-3">
{project.title}
</h3>

<p className="text-gray-300 mb-6">
{project.desc}
</p>

{/* TECH BADGES */}

<div className="flex flex-wrap gap-2 mb-6">

{project.tech.map((tech,i)=>(

<span
key={i}
className="
px-3 py-1 text-sm
rounded-full
bg-green-500/20
text-green-400
"
>
{tech}
</span>

))}

</div>

{/* ACTION BUTTONS */}

<div className="flex gap-4">

<a
href={project.github}
className="px-4 py-2 rounded-lg bg-green-500 text-black font-semibold hover:scale-105 transition"
>
GitHub
</a>

<a
href={project.demo}
className="px-4 py-2 rounded-lg border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition"
>
Demo
</a>

</div>

</motion.div>

))}

</div>

</section>

);

};

export default Projet;
