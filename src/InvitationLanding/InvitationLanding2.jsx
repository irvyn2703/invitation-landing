import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InvitationLanding2() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 to-yellow-300">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", duration: 2 }}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full text-center bg-cover bg-center relative"
          >
            <motion.div
              className="w-5/10 absolute top-0 left-0 z-10"
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 2 }}
            >
              <img
                src="/assets/hojas1.png"
                className="w-full h-full object-contain"
                alt="Hojas"
              />
            </motion.div>

            <motion.div
              className="w-5/10 absolute top-0 right-0 z-10"
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 2 }}
            >
              <img
                src="/assets/hojas1.png"
                className="w-full h-full object-contain transform -scale-x-100"
                alt="Hojas"
              />
            </motion.div>

            <motion.div
              className="w-5/10 absolute bottom-0 left-0 z-10"
              initial={{ y: 500 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 2 }}
            >
              <img
                src="/assets/hojas1.png"
                className="w-full h-full object-contain transform -scale-y-100"
                alt="Hojas"
              />
            </motion.div>

            <motion.div
              className="w-5/10 absolute bottom-0 right-0 z-10"
              initial={{ y: 500 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 2 }}
            >
              <img
                src="/assets/hojas1.png"
                className="w-full h-full object-contain transform -scale-x-100 -scale-y-100"
                alt="Hojas"
              />
            </motion.div>

            <motion.div
              className="absolute top-0 left-0 flex flex-col justify-between h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              {[...Array(6)].map((_, i) => (
                <img
                  key={i}
                  src="/assets/hojas4.png"
                  className="max-w-[100px] w-full h-auto object-contain"
                  alt="Decoración izquierda"
                />
              ))}
            </motion.div>

            <motion.div
              className="absolute top-0 right-0 flex flex-col justify-between h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              {[...Array(6)].map((_, i) => (
                <img
                  key={i}
                  src="/assets/hojas4.png"
                  className="max-w-[100px] w-full h-auto object-contain -scale-x-100"
                  alt="Decoración derecha"
                />
              ))}
            </motion.div>

            <motion.div
              className="absolute top-0 left-0 flex flex-col justify-between h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src="/assets/hojas2.png"
                  className="max-w-[100px] w-full h-auto object-contain"
                  alt="Decoración izquierda"
                />
              ))}
            </motion.div>

            <motion.div
              className="absolute top-0 right-0 flex flex-col justify-between h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src="/assets/hojas2.png"
                  className="max-w-[100px] w-full h-auto object-contain -scale-x-100"
                  alt="Decoración derecha"
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 2, delay: 2 }}
              className="fixed inset-0 z-0 bg-cover bg-center max-w-lg m-auto"
              style={{ backgroundImage: "url('/assets/imagen.png')" }}
            ></motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", duration: 4, delay: 3 }}
            >
              <div className="min-h-screen overflow-y-hidden snap-y snap-mandatory">
                {/* Sección 1: Foto y Título */}
                <section className="flex flex-col items-center justify-center min-h-screen snap-start">
                  <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-r from-yellow-900 via-yellow-600 to-yellow-800">
                    <img
                      src="/assets/caliz.jpg"
                      alt="Isis y Hector"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <motion.p
                    className="text-4xl font-bold text-yellow-600 mt-6 mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    NUESTRA PRIMERA COMUNIÓN
                  </motion.p>
                  <motion.p
                    className="relative text-4xl font-bold bg-gradient-to-r from-yellow-900 via-yellow-600 to-yellow-800 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    ISIS & HÉCTOR
                  </motion.p>
                </section>

                {/* Sección 2: Papás y Madrina */}
                <section className="flex flex-col items-center justify-center min-h-screen snap-start space-y-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <p className="font-bold text-yellow-600 text-2xl">
                      MIS PAPÁS
                    </p>
                    <p className="ml-2">Isabel Cabrera & Manuel Cárdenas</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <p className="font-bold text-yellow-600 text-2xl">
                      MADRINA
                    </p>
                    <p className="ml-2">Valentina Sánchez Peña</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <p className="font-bold text-yellow-600 text-2xl">FECHA</p>
                    <p className="ml-2">5 de Octubre 2025 a las 3:00 PM</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <p className="font-bold text-yellow-600 text-2xl">
                      REGALO SUGERIDO
                    </p>
                    <p className="ml-2">Lluvia de sobres 💌</p>
                  </motion.div>
                </section>

                {/* Sección 4: Ubicación */}
                <section className="flex flex-col items-center justify-center min-h-screen snap-start text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center w-full h-dvh space-x-2 text-cyan-800 font-semibold hover:text-cyan-600"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.1029571526983!2d-98.31733142435274!3d19.277883581968695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfd0aea90c88c1%3A0x6722f90d4388d23a!2sIturbide%209%2C%2090716%20San%20Francisco%20Tenexyecac%2C%20Tlax.!5e0!3m2!1ses-419!2smx!4v1755652275847!5m2!1ses-419!2smx"
                      className="w-full h-8/10 p-10 border-0"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </motion.div>
                </section>
              </div>
            </motion.div>

            {/* Modal de Google Maps */}
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
                    className="bg-white rounded-xl shadow-xl w-11/12 md:w-3/4 h-96 overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.1029571526983!2d-98.31733142435274!3d19.277883581968695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfd0aea90c88c1%3A0x6722f90d4388d23a!2sIturbide%209%2C%2090716%20San%20Francisco%20Tenexyecac%2C%20Tlax.!5e0!3m2!1ses-419!2smx!4v1755652275847!5m2!1ses-419!2smx"
                      className="w-full h-full border-0"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
