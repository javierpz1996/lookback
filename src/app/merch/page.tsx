"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Artbook Oficial",
    description: "Ilustraciones exclusivas y storyboards del largometraje.",
    image: "/img/merch1.png",
    price: "$550 MXN",
  },
  {
    id: 2,
    name: "Blu-ray",
    description: "Edición limitada con entrevista al staff y postales.",
    image: "/img/merch1.png",
    price: "$720 MXN",
  },
  {
    id: 3,
    name: "Soundtrack Deluxe",
    description: "Vinilo translúcido con partituras originales.",
    image: "/img/merch1.png",
    price: "$680 MXN",
  },
  {
    id: 4,
    name: "Dúo de Láminas",
    description: "Set de arte A3 con acabados metalizados.",
    image: "/img/merch1.png",
    price: "$320 MXN",
  },
  {
    id: 5,
    name: "Cuaderno Fujino",
    description: "Diseño cuadriculado inspirado en los bocetos del manga.",
    image: "/img/merch1.png",
    price: "$180 MXN",
  },
  {
    id: 6,
    name: "Cuaderno Kyomoto",
    description: "Papel premium libre de ácido, ideal para ilustrar.",
    image: "/img/merch1.png",
    price: "$190 MXN",
  },
  {
    id: 7,
    name: "Set de Stickers",
    description: "Vinilos resistentes al agua con personajes chibi.",
    image: "/img/merch1.png",
    price: "$120 MXN",
  },
  {
    id: 8,
    name: "Poster Panorama",
    description: "Impresa en papel algodón con numeración especial.",
    image: "/img/merch1.png",
    price: "$260 MXN",
  },
];

const MerchPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProductModal = (product: (typeof products)[number]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-black font-outfit">
      <div className="flex flex-col min-h-screen">
        <section className="w-full bg-[#F5F1E8] ml-1 py-16 flex flex-col gap-10 items-start ">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative inline-block">
              <span className="absolute left-7 top-10 z-10 text-5xl lg:text-6xl font-bold uppercase tracking-[0.4em] text-white ">
                MERCH
              </span>
              <Image
                src="/img/8.jpg"
                alt="Colección Look Back"
                width={560}
                height={200}
                className="object-cover w-[560px] lg:w-[515px] lg:h-[140px] border-3 border-black brightness-50"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl text-center space-y-5"
          >
            <h1 className="text-4xl lg:text-5xl font-bold uppercase tracking-wide text-left ml-1">
              Merchandising Oficial
            </h1>
            <p className="text-base lg:text-lg leading-relaxed text-left ml-1">
              Una selección curada de productos inspirados en la sensibilidad de Fujino y Kyomoto. Piezas pensadas para coleccionistas que buscan conservar la esencia de <span className="italic">Look Back</span>.
            </p>
          </motion.div>
        </section>

        <section className="w-full bg-[#E8E3D9] py-16 lg:py-20 px-6 lg:px-16">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-wide">
              Colecciones Destacadas
            </h2>
            <p className="mt-6 text-base lg:text-lg leading-relaxed">
              Cada pieza está diseñada para dialogar con la paleta cálida del film. Desde ediciones limitadas hasta artículos cotidianos, todo está pensado para acompañar la experiencia visual y emotiva de la película.
            </p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Card
                  className="border-3 border-black rounded-none bg-[#F5F1E8] shadow-lg shadow-black/10 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => openProductModal(product)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openProductModal(product);
                    }
                  }}
                >
                  <CardHeader className="px-6 pt-6 pb-4">
                    <CardTitle className="text-xl uppercase tracking-widest">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-black/60">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-4">
                    <div className="relative block w-full aspect-square border-3 border-black bg-white">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6">
                    <div className="flex w-full items-center justify-between gap-3">
                      <span className="text-lg font-semibold">{product.price}</span>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          openProductModal(product);
                        }}
                        className="border-2 border-black px-3 py-2 uppercase text-xs tracking-[0.25em] hover:bg-black hover:text-white transition-colors"
                      >
                        Ver
                      </button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={closeProductModal}
          >
            <motion.div
              className="relative w-full max-w-3xl mx-4 bg-[#F5F1E8] border-4 border-black shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeProductModal}
                className="absolute right-4 top-4 text-black hover:text-black/60 font-bold text-xl"
                aria-label="Cerrar modal"
              >
                ×
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                <div className="relative w-full aspect-square border-3 border-black bg-white">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-3xl font-bold uppercase tracking-[0.3em]">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-base leading-relaxed text-black/80">
                    {selectedProduct.description}
                  </p>
                  <span className="text-xl font-semibold">{selectedProduct.price}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MerchPage;