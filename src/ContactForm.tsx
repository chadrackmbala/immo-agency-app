import React from "react";
import { useNavigate } from 'react-router-dom';

export default function ContactForm() {

  const navigate = useNavigate();

  return (
    <div className=" mx-auto p-6 m bg-white rounded-lg  mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Veuillez remplir le formulaire pour nous permettre de vous contacter
      </h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nom complet"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 w-full"
        />
        <input
          type="text"
          placeholder="Téléphone"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 w-full"
        />
        <textarea
          placeholder="Votre message"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 w-full"
          rows={5}
        />
        <button
          type="submit"
          className="bg-[#1D3865] text-white py-3 rounded hover:bg-sky-700 transition w-full"
        >
          Envoyer
        </button>
        <button
          onClick={() => navigate("/offre-immobiliere")}
          className="bg-[#F4D164] text-white py-3 rounded hover:bg-sky-700 transition w-full"
        >
          Retour
        </button>
      </form>
    </div>
  );
}
