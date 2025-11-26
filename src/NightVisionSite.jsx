import React from "react";
import "./site.css";

export default function NightVisionSite() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">

      {/* HEADER */}
      <header className="nv-header fixed top-0 left-0 w-full z-50 py-4 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold logo-animated">NIGHT VISION</h1>
        <a href="#contact" className="btn-nv halo-sync">Nous contacter</a>
      </header>

      {/* HERO */}
      <section className="section-nv flex flex-col items-center justify-center text-center pt-40">
        <h2 className="title-nv title-halo">L'expérience lumineuse ultime</h2>
        <p className="mt-4 max-w-xl text-gray-300">
          Des distributeurs automatiques de lunettes lumineuses pour clubs,
          bars et festivals. Paiement sans contact. Installation express.
        </p>
        <a href="#concept" className="btn-nv halo-sync mt-8">Découvrir</a>
      </section>

      {/* CONCEPT */}
      <section id="concept" className="section-nv text-center">
        <h2 className="title-nv title-halo mb-10">Concept</h2>

        <div className="max-w-4xl mx-auto text-lg text-gray-300">
          <p className="mb-6">
            NIGHT VISION apporte aux lieux festifs une solution unique : un
            distributeur automatique de lunettes lumineuses premium.
          </p>
          <p className="mb-6">
            Installation rapide, expérience fluide et un rendu visuel qui fait vibrer
            votre public.
          </p>
        </div>
      </section>

      {/* IMAGES IMMERSION */}
      <section className="section-nv text-center">
        <h2 className="title-nv title-halo mb-10">Immersion</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 max-w-4xl mx-auto">
          <img src="/public/assets/immersion-1.png" className="rounded-lg halo-sync" />
          <img src="/public/assets/immersion-2.png" className="rounded-lg halo-sync" />
          <img src="/public/assets/immersion-3.png" className="rounded-lg halo-sync" />
          <img src="/public/assets/immersion-4.png" className="rounded-lg halo-sync" />
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="section-nv text-center">
        <h2 className="title-nv title-halo mb-10">Pour Qui ?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-5xl mx-auto">
          <div>
            <img src="/public/assets/FESTIVALS.png" className="w-full mb-4" />
            <p className="font-bold">Festivals</p>
          </div>
          <div>
            <img src="/public/assets/CLUBS.png" className="w-full mb-4" />
            <p className="font-bold">Clubs</p>
          </div>
          <div>
            <img src="/public/assets/PETITS-CLUBS-BARS.png" className="w-full mb-4" />
            <p className="font-bold">Bars / Petits Clubs</p>
          </div>
        </div>
      </section>

     {/* CONTACT */}
<section id="contact" className="section-nv text-center">
  <h2 className="title-nv title-halo mb-6">Contact</h2>

  <p className="text-gray-300 mb-6">
    Vous souhaitez installer une machine NIGHT VISION ?
    Contactez-nous et nous revenons vers vous sous 24h.
  </p>

  <form
    onSubmit={async (e) => {
      e.preventDefault();

      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      };

      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message envoyé !");
        e.target.reset();
      } else {
        alert("Erreur : impossible d’envoyer le message.");
      }
    }}
    className="max-w-md mx-auto flex flex-col gap-4 mt-6"
  >
    <input
      name="name"
      required
      placeholder="Votre nom"
      className="p-3 bg-black border border-gray-700 rounded"
    />

    <input
      name="email"
      type="email"
      required
      placeholder="Votre email"
      className="p-3 bg-black border border-gray-700 rounded"
    />

    <textarea
      name="message"
      required
      placeholder="Votre message"
      className="p-3 bg-black border border-gray-700 rounded h-32"
    ></textarea>

    <button type="submit" className="btn-nv halo-sync">
      Envoyer
    </button>
  </form>
</section>


      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm mt-20">
        © {new Date().getFullYear()} NIGHT VISION — Tous droits réservés.
      </footer>
    </div>
  );
}
