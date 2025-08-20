import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InvitationLanding() {
  const [open, setOpen] = useState(false);
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-yellow-500 to-yellow-50 p-4">
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className="cursor-pointer w-64 absolute"
            onClick={() => setOpen(true)}
          >
            {/* Cuerpo del sobre */}
            <div className="bg-gray-200 rounded-b-lg h-40 shadow-xl relative overflow-hidden">
              <p className="absolute bottom-4 w-full text-center font-semibold text-cyan-950">
                Haz clic para abrir
              </p>
            </div>

            {/* Pico del sobre */}
            <div className="absolute top-0 left-0 w-0 h-0 border-l-[128px] border-r-[128px] border-t-[80px] border-l-transparent border-r-transparent border-t-gray-50"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", duration: 2 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center bg-cover bg-center relative"
            style={{ backgroundImage: "url('/assets/background.png')" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ type: "spring", duration: 4, delay: 0.5 }}
              className="absolute inset-0 bg-white rounded-b-lg"
            ></motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", duration: 2, delay: 1 }}
            >
              <p className="text-2xl font-bold text-yellow-600 mb-4">
                NUESTRA PRIMERA COMUNIÓN
              </p>
              <p className="relative text-4xl font-bold bg-gradient-to-r from-yellow-900 via-yellow-600 to-yellow-800 bg-clip-text text-transparent">
                ISIS & HÉCTOR
              </p>
              <div className="flex flex-col items-center mt-6">
                <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-r from-yellow-900 via-yellow-600 to-yellow-800">
                  <img
                    src="/assets/imagen.png"
                    alt="Isis y Hector"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <div className="mt-4 space-y-4 text-gray-700 text-center">
                <div>
                  <p className="font-bold">MIS PAPÁS</p>
                  <p className="ml-2">Isabel Cabrera & Manuel Cárdenas</p>
                </div>

                <div>
                  <p className="font-bold">MADRINA</p>
                  <p className="ml-2">Valentina Sánchez Peña</p>
                </div>

                <div>
                  <p className="font-bold">FECHA</p>
                  <p className="ml-2">5 de Octubre 2025 a las 3:00 PM</p>
                </div>

                <div>
                  <p className="font-bold">REGALO SUGERIDO</p>
                  <p className="ml-2">Lluvia de sobres 💌</p>
                </div>

                {/* Icono de ubicación */}
                <div className="mt-4 ">
                  <button
                    onClick={() => setShowMap(true)}
                    className="flex flex-col items-center justify-center w-full space-x-2 text-cyan-800 font-semibold hover:text-cyan-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                    <span>Ver ubicación</span>
                  </button>
                </div>
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
