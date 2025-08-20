import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InvitationLanding4() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200">
      {/* Fondo animado */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.img
        src="/assets/hojas1.png"
        className="fixed top-0 left-0 w-40 object-contain z-10"
        initial={{ x: -200, y: -200, rotate: -30 }}
        animate={{ x: 0, y: 0, rotate: 0 }}
        transition={{ type: "spring", duration: 2 }}
      />
      <motion.img
        src="/assets/hojas1.png"
        className="fixed bottom-0 right-0 w-40 object-contain z-10 -scale-x-100 -scale-y-100"
        initial={{ x: 200, y: 200, rotate: 30 }}
        animate={{ x: 0, y: 0, rotate: 0 }}
        transition={{ type: "spring", duration: 2 }}
      />

      {/* Contenedor scrollable */}
      <div className="relative z-20 snap-y snap-mandatory overflow-y-scroll h-screen">
        {/* Sección 1: Foto central con halo y título */}
        <section className="snap-start flex flex-col items-center justify-center h-screen text-center px-6">
          <motion.div
            className="w-44 h-44 rounded-full p-3 bg-gradient-to-tr from-yellow-300 via-yellow-400 to-yellow-500 shadow-lg"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1.5 }}
          >
            <img
              src="/assets/caliz.jpg"
              alt="Isis y Hector"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-inner"
            />
          </motion.div>
          <motion.h1
            className="text-4xl font-extrabold text-yellow-800 mt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Nuestra Primera Comunión
          </motion.h1>
          <motion.h2
            className="text-5xl font-extrabold bg-gradient-to-r from-yellow-900 via-yellow-600 to-yellow-800 bg-clip-text text-transparent mt-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Isis & Héctor
          </motion.h2>
        </section>

        {/* Sección 2: Tarjetas flotantes con información */}
        <section className="snap-start flex flex-col items-center justify-center h-screen space-y-6 px-4 md:px-0">
          {[
            { title: "MIS PAPÁS", content: "Isabel Cabrera & Manuel Cárdenas" },
            { title: "MADRINA", content: "Valentina Sánchez Peña" },
            { title: "FECHA", content: "5 de Octubre 2025 a las 3:00 PM" },
            { title: "REGALO SUGERIDO", content: "Lluvia de sobres 💌" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-md backdrop-blur-sm bg-opacity-50 border border-yellow-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
            >
              <h2 className="text-2xl font-bold text-yellow-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700">{item.content}</p>
            </motion.div>
          ))}
        </section>

        {/* Sección 3: Ubicación con botón */}
        <section className="snap-start flex flex-col items-center justify-center h-screen px-6">
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-xl text-center border border-yellow-200 backdrop-blur-sm bg-opacity-50"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">
              UBICACIÓN
            </h2>
            <button
              onClick={() => setShowMap(true)}
              className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-full shadow-md hover:bg-yellow-700 transition"
            >
              Ver Mapa
            </button>
          </motion.div>
        </section>
      </div>

      {/* Modal Google Maps */}
      <AnimatePresence>
        {showMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowMap(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-2xl shadow-xl w-11/12 md:w-3/4 h-96 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.1029571526983!2d-98.31733142435274!3d19.277883581968695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfd0aea90c88c1%3A0x6722f90d4388d23a!2sIturbide%209%2C%2090716%20San%20Francisco%20Tenexyecac%2C%20Tlax.!5e0!3m2!1ses-419!2smx!4v1755652275847!5m2!1ses-419!2smx"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
