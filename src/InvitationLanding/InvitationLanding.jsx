import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InvitationLanding() {
  const [open, setOpen] = useState(false);
  const [showMap, setShowMap] = useState(false);

  // Obtener parámetro v de la URL
  const searchParams = new URLSearchParams(window.location.search);
  const version = searchParams.get("v");

  // Variants para centralizar animaciones
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay, ease: "easeInOut" },
    }),
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-500 to-yellow-50 p-4">
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.4 } }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="cursor-pointer w-64 absolute"
            onClick={() => setOpen(true)}
          >
            {/* Cuerpo del sobre */}
            <div className="bg-gray-200 rounded-b-lg h-40 shadow-xl relative overflow-hidden">
              <p className="absolute bottom-4 w-full text-center font-semibold text-cyan-950">
                Haz clic para abrir
              </p>
            </div>

            {/* Pico del sobre con animación */}
            <motion.div
              initial={{ rotateX: 0 }}
              exit={{ rotateX: -180 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ transformOrigin: "top center" }}
              className="absolute top-0 left-0 w-0 h-0 border-l-[128px] border-r-[128px] border-t-[80px] border-l-transparent border-r-transparent border-t-gray-50"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 text-center bg-cover bg-center relative"
            style={{ backgroundImage: "url('/assets/background.png')" }}
            variants={fadeIn}
          >
            {/* Sombra blanca suave */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-white rounded-b-lg"
            />

            <motion.div className="relative space-y-4">
              <motion.p
                layout
                initial={{ opacity: 0, scale: 1.2, y: "50vh" }} // aparece en el centro y grande
                animate={{ opacity: 1, scale: 1, y: 0 }} // luego se acomoda en su lugar
                transition={{ duration: 2, ease: "easeIn" }}
                className="text-2xl font-bold text-yellow-600 uppercase"
              >
                tenemos el honor de invitarlos a:
              </motion.p>

              <motion.p
                variants={fadeIn}
                custom={1.6}
                className="text-3xl font-bold text-yellow-600"
              >
                NUESTRA PRIMERA COMUNIÓN
              </motion.p>

              <motion.p
                variants={fadeIn}
                custom={1.9}
                className="relative text-4xl font-bold bg-gradient-to-r from-yellow-900 via-yellow-600 to-yellow-800 bg-clip-text text-transparent"
              >
                HÉCTOR & ISIS
              </motion.p>

              <motion.div
                variants={fadeIn}
                custom={2.2}
                className="flex flex-col items-center"
              >
                <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-r from-yellow-900 via-yellow-600 to-yellow-800">
                  <img
                    src="/assets/imagen.jpg"
                    alt="Isis y Hector"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>

              {/* Info secciones */}
              <motion.div
                variants={fadeIn}
                custom={2.5}
                className="mt-4 space-y-4 text-gray-700 text-center"
              >
                <div>
                  <p className="font-bold">MIS PAPÁS</p>
                  <p className="ml-2">Manuel Cárdenas e Isabel Cabrera</p>
                </div>
                <div>
                  <p className="font-bold">PADRINOS</p>
                  <p className="ml-2">
                    Marcos Morales Fernández y Rosa Virginia Sánchez Pena
                  </p>
                </div>
                <div>
                  <p className="font-bold">FECHA</p>
                  <p className="ml-2">5 de Octubre 2025 a las 3:00 PM</p>
                </div>
                {version !== "2" && (
                  <div>
                    <p className="font-bold">REGALO SUGERIDO</p>
                    <p className="ml-2">Lluvia de sobres 💌</p>
                  </div>
                )}

                {/* Botón ubicación */}
                <div className="mt-4">
                  <button
                    onClick={() => setShowMap(true)}
                    className="flex flex-col items-center justify-center w-full text-cyan-800 font-semibold hover:text-cyan-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                    <span>Ver ubicación</span>
                  </button>
                </div>
              </motion.div>
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
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-xl shadow-xl w-11/12 md:w-3/4 h-96 overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.1098682194224!2d-98.31696512435268!3d19.277587781968908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfd0aeac8a990b%3A0x723cf38a9f353190!2sIturbide%2012%2C%2090716%20San%20Francisco%20Tenexyecac%2C%20Tlax.!5e0!3m2!1ses-419!2smx!4v1755796231403!5m2!1ses-419!2smx"
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
