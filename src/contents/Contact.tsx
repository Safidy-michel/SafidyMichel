import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const FORMSPREE_ACTION_URL = "https://formspree.io/f/movkeywy"; // soloina amin'ny anao

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch(FORMSPREE_ACTION_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }

    // Revenir à idle après 3s
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-start gap-12 bg-gradient-to-b from-gray-600 to-gray-800 p-8 text-white pt-40"
    id="contact">
      
      {/* ----- Formulaire ----- */}
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl w-full max-w-md space-y-4 relative shadow-2xl "
      >
        <h2 className="text-3xl font-bold text-center mb-4">Contact 
       <span className="text-green-400 font-bold"> Me</span>   
          </h2>

        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-3 rounded bg-zinc-800 focus:ring-2 focus:ring-green-400 transition duration-300"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 rounded bg-zinc-800 focus:ring-2 focus:ring-green-400 transition duration-300"
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="w-full p-3 rounded bg-zinc-800 focus:ring-2 focus:ring-green-400 transition duration-300"
        />

        <button
          type="submit"
          className={`w-full p-3 rounded font-semibold transition-all duration-300
            ${
              status === "loading"
                ? "bg-yellow-500 cursor-wait animate-pulse"
                : status === "success"
                ? "bg-green-600 hover:bg-green-700"
                : status === "error"
                ? "bg-red-600 hover:bg-red-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
          disabled={status === "loading"}
        >
          {status === "loading"
            ? "Envoi en cours..."
            : status === "success"
            ? "Message envoyé ✅"
            : status === "error"
            ? "Erreur ❌"
            : "Envoyer"}
        </button>

        {/* Message au-dessus du bouton si tu veux animation supplémentaire */}
        {status === "success" && (
          <p className="text-green-400 font-bold text-center mt-2 animate-pulse">
            Votre message a été envoyé avec succès!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 font-bold text-center mt-2 animate-pulse">
            Une erreur s'est produite. Réessayez.
          </p>
        )}
      </form>

      {/* ----- Contact Info ----- */}
      <div className="flex flex-col justify-start space-y-6 min-w-[300px] mt-30 ml-25">
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-green-500 text-2xl" />
          <p className="text-lg">michelsafidy08@gmail.com</p>
        </div>
        <div className="flex items-center space-x-3">
          <FaPhone className="text-green-500 text-2xl" />
          <p className="text-lg">(+261) 34 78 155 16</p>
        </div>
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="text-green-500 text-2xl" />
          <p className="text-lg">
            Ankadindramamy Lot II H12 RDBA, Antananarivo, Madagascar
          </p>
        </div>
      </div>

    </section>
  );
};

export default Contact;
