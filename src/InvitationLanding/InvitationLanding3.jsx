import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InvitationLandingFestive() {
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      <motion.img
        src="/assets/imagen.png"
        className="fixed top-0 left-0 w-dvw h-dvh object-cover z-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.2 }}
        transition={{ type: "spring", duration: 2, delay: 1 }}
      />
      <div className="relative min-h-svh overflow-y-hidden">
        {/* Hojas decorativas */}
        <motion.img
          src="/assets/hojas1.png"
          className="absolute top-0 left-0 w-32 object-contain"
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 2 }}
        />
        <motion.img
          src="/assets/hojas1.png"
          className="absolute top-0 right-0 w-32 object-contain -scale-x-100"
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 2 }}
        />
        <motion.img
          src="/assets/hojas1.png"
          className="absolute bottom-0 left-0 w-32 object-contain -scale-y-100"
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 2 }}
        />
        <motion.img
          src="/assets/hojas1.png"
          className="absolute bottom-0 right-0 w-32 object-contain -scale-x-100 -scale-y-100"
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 2 }}
        />

        {/* Contenedor scrollable */}
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
          {/* Sección 1: Foto y título */}
          <section className="snap-start flex flex-col items-center justify-center h-screen text-center px-6">
            <motion.div
              className="w-40 h-40 rounded-full p-2 bg-gradient-to-r from-yellow-900 via-yellow-600 to-yellow-800"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1.5, delay: 2 }}
            >
              <img
                src="/assets/caliz.jpg"
                alt="Isis y Hector"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
            <motion.h1
              className="text-4xl font-bold text-yellow-700 mt-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 2 }}
            >
              NUESTRA PRIMERA COMUNIÓN
            </motion.h1>
            <motion.h2
              className="text-5xl font-extrabold bg-gradient-to-r from-yellow-900 via-yellow-600 to-yellow-800 bg-clip-text text-transparent mt-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 2.3 }}
            >
              ISIS & HÉCTOR
            </motion.h2>
          </section>

          {/* Sección 2: Papás y Madrina */}
          <section className="snap-start flex flex-col items-center justify-center h-screen space-y-8 text-center px-6">
            <motion.div
              className="bg-yellow-50 rounded-3xl p-6 shadow-lg w-full max-w-lg"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl font-bold text-yellow-700 mb-2">
                MIS PAPÁS
              </h2>
              <p className="text-gray-700">Isabel Cabrera & Manuel Cárdenas</p>
            </motion.div>

            <motion.div
              className="bg-yellow-50 rounded-3xl p-6 shadow-lg w-full max-w-lg"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl font-bold text-yellow-700 mb-2">
                MADRINA
              </h2>
              <p className="text-gray-700">Valentina Sánchez Peña</p>
            </motion.div>
          </section>

          {/* Sección 3: Fecha y Regalo */}
          <section className="snap-start flex flex-col items-center justify-center h-screen space-y-8 text-center px-6">
            <motion.div
              className="bg-yellow-50 rounded-3xl p-6 shadow-lg w-full max-w-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl font-bold text-yellow-700 mb-2">FECHA</h2>
              <p className="text-gray-700">5 de Octubre 2025 a las 3:00 PM</p>
            </motion.div>

            <motion.div
              className="bg-yellow-50 rounded-3xl p-6 shadow-lg w-full max-w-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-yellow-700 mb-2">
                REGALO SUGERIDO
              </h2>
              <p className="text-gray-700">Lluvia de sobres 💌</p>
            </motion.div>
          </section>

          {/* Sección 4: Ubicación */}
          <section className="snap-start flex flex-col items-center justify-center h-screen px-6">
            <motion.div
              className="bg-yellow-100 rounded-3xl shadow-lg p-6 w-full max-w-3xl text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
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
    </>
  );
}
