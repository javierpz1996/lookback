"use client";

import Image from "next/image";
import { Blockquote } from "@/components/ui/blockquote";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [currentImage, setCurrentImage] = useState("/img/5.jpg");

  const images = [
    { src: "/img/5.jpg", alt: "Character 5" },
    { src: "/img/10.png", alt: "Look Back Characters" },
  ];

  const youtubeVideos = [
    { id: "gH6zVJVHEaM", title: "Look Back Video 1" },
    { id: "_zn3A6fSYOY", title: "Look Back Video 2" },
    { id: "FbZd4FeNcLU", title: "Look Back Video 3" },
  ];

  const cast = [
    { name: "Fujino", role: "Voz", image: "/img/14.jpg" },
    { name: "Kyomoto", role: "Voz", image: "/img/13.jpg" },
    { name: "Fujino", role: "Voz", image: "/img/14.jpg" },
    { name: "Kyomoto", role: "Voz", image: "/img/13.jpg" },
    { name: "Fujino", role: "Voz", image: "/img/14.jpg" },
    { name: "Kyomoto", role: "Voz", image: "/img/13.jpg" },
    { name: "Fujino", role: "Voz", image: "/img/14.jpg" },
    { name: "Kyomoto", role: "Voz", image: "/img/13.jpg" },
  ];

  const festivals = [
    { name: "Tokyo International Film Festival", image: "/img/premio1.jpg" },
    { name: "Awards of the Japanese Academy", image: "/img/premio2.jpg" },
    { name: "Shanghai International Film Festival", image: "/img/premio3.jpg" },
    {
      name: "Annecy International Animation Festival",
      image: "/img/premio4.jpg",
    },
    { name: "Leiden International Film Festival", image: "/img/premio5.jpg" },
    {
      name: "Hong Kong Summer International Film Festival",
      image: "/img/premio6.jpg",
    },
  ];

  const processImages = [
    { src: "/img/manga1.jpg", alt: "Manga 1" },
    { src: "/img/manga2.jpg", alt: "Manga 2" },
    { src: "/img/manga3.jpg", alt: "Manga 3" },
    { src: "/img/manga4.jpg", alt: "Manga 4" },
    { src: "/img/manga5.jpg", alt: "Manga 5" },
    { src: "/img/manga6.jpg", alt: "Manga 6" },
  ];

  return (
    <div>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Primera columna */}
        <div className="w-full lg:w-[35%] bg-[#F5F1E8] relative flex flex-col min-h-[50vh] lg:min-h-screen lg:sticky lg:top-0 lg:h-screen gap-11">
          {/* Top Image */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/img/7.jpg"
              alt="Character"
              width={400}
              height={400}
              className="object-cover lg:w-[315px] lg:h-[140px] border-3 border-black"
            />
          </motion.div>

          {/* Logo */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Image
              src="/img/logo_main.png"
              alt="Look Back Logo"
              width={1000}
              height={1000}
              className="mx-auto w-[510px]"
            />
          </motion.div>

          <div className="flex justify-center">
            <div className="text-center text-black w-[680px]">
              <h2 className="text-2xl font-thin text-center font-outfit">
                "48ª edición de los Premios de la Academia Japonesa. ¡Ganador
                del premio a la Mejor Película de Animación!"
              </h2>
            </div>
          </div>

          {/* Blu-ray Button */}
          <div className="flex justify-center">
            <div className="w-[380px] border-3 border-black bg-[#D8B76B] text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#5A6B4A] transition-colors cursor-pointer text-xs lg:text-sm text-center">
              <span className="text-center font-bold font-outfit text-xl text-black">
                2026年1月21日(水) <br /> Blu-ray&DVD発売決定!
              </span>
            </div>
          </div>

          <div className="flex justify-start ml-6 mt-auto mb-10">
            <Blockquote className="text-black font-outfit border-l-2 border-black pl-6 italic max-w-[210px]">
              "i thought i would never see the day when my work will come to
              life with such sincerity"
            </Blockquote>
          </div>

          <motion.div
            className="absolute bottom-15 lg:bottom-4 right-45"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/img/11.jpg"
              alt="Character"
              width={200}
              height={200}
              className="object-cover lg:w-[200px] lg:h-[130px] border-3 border-black"
            ></Image>
          </motion.div>

          <motion.div
            className="absolute bottom-20 lg:bottom-8 right-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/img/8.jpg"
              alt="Manga Pages"
              width={220}
              height={200}
              className="object-cover lg:w-[230px] lg:h-[140px] border-3 border-black"
            ></Image>
          </motion.div>
        </div>

        {/* Segunda columna - Main Illustration */}
        <div className="w-full lg:w-[61%] relative bg-[#E8E3D9] flex items-start justify-center min-h-[50vh]">
          {/* Thumbnails - Positioned at bottom center */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-row gap-3">
            {images.map((img, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentImage(img.src)}
                className={`relative w-12 h-12 lg:w-14 lg:h-14 border-2 transition-all hover:scale-110 ${
                  currentImage === img.src
                    ? "border-black border-3"
                    : "border-gray-400"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </motion.button>
            ))}
          </div>

          {/* Main Illustration */}
          <motion.div
            className="relative w-full"
            key={currentImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={currentImage}
              alt="Look Back Characters"
              width={800}
              height={1600}
              className="border-3 border-black w-full h-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Nuevas secciones apiladas verticalmente */}

      {/* Sección 1 */}
      <div className="w-full">
        <section className="w-full min-h-screen pt-16 lg:pt-35 lg:p-16 bg-[#F5F1E8]">
          <div className="max-w-6xl w-full mx-auto text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold font-outfit mb-8 text-black">
              UNA HISTORIA PERSONAL DE FUJIMOTO TATSUKI
            </h2>
            <p className="text-lg font-outfit text-black">
              En mi opinión, “Look Back” es una historia profundamente personal
              y emocional de Tatsuki Fujimoto, que se aleja del caos violento y
              absurdo de Chainsaw Man para mostrarnos su lado más humano, íntimo
              y reflexivo. Es un relato sobre la pasión creativa, la soledad, la
              amistad y la pérdida, contado con una sensibilidad que deja una
              marca incluso después de terminarla. Más que un simple homenaje al
              arte del manga, parece una autobiografía emocional de Fujimoto,
              donde expresa sus inseguridades como artista y la culpa o el miedo
              de perder aquello que lo inspira a seguir creando. La relación
              entre Fujino y Kyomoto simboliza perfectamente el contraste entre
              la competitividad y la admiración, y cómo el arte puede conectar
              —y también aislar— a las personas. Visualmente, el corto logra
              traducir esa atmósfera melancólica y contemplativa del manga, con
              una dirección que respeta los silencios y los gestos pequeños,
              esos momentos que dicen más que las palabras.
            </p>
          </div>
          <div className="max-w-6xl mx-auto pt-10">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-16 px-4">
              <div className="w-full lg:w-2/5 space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold font-outfit text-black mb-4">
                  FUJINO <span className="ml-1 text-2xl">藤野</span>
                </h3>
                <p className="text-base lg:text-lg font-outfit text-black leading-relaxed">
                  Fujino es una chica extrovertida, talentosa y llena de
                  confianza en sí misma. Desde pequeña, se destaca por sus
                  dibujos y disfruta el reconocimiento que eso le da. Pero su
                  seguridad se tambalea cuando descubre a Kyomoto, una compañera
                  silenciosa y recluida que dibuja con una sensibilidad y
                  técnica que la superan. Esa comparación despierta en Fujino
                  una mezcla de celos, frustración y motivación. Con el tiempo,
                  su rivalidad se transforma en admiración y luego en un vínculo
                  profundo que marcará su vida.
                </p>
                <motion.div
                  className="w-full mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Image
                    src="/img/gif6.gif"
                    alt="Look Back Characters"
                    width={400}
                    height={110}
                    className="object-cover object-center border-3 border-black w-full h-[110px]"
                  ></Image>
                </motion.div>
              </div>
              <motion.div
                className="w-full lg:w-2/5 flex flex-col items-center lg:items-end"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  className="relative w-full max-w-md aspect-square"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/img/14.jpg"
                    alt="Look Back Characters"
                    width={500}
                    height={500}
                    className="object-cover border-4 border-black w-full h-full "
                  />
                </motion.div>
                <p className="mt-2 text-center lg:text-right font-outfit text-black text-base lg:text-md">
                  Ayumu Fujino (藤野 キョウ Fujino Kyō)
                </p>
              </motion.div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto pt-10">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-16 px-4">
              <motion.div
                className="w-full lg:w-2/5 flex flex-col items-center lg:items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  className="relative w-full max-w-md aspect-square"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/img/13.jpg"
                    alt="Look Back Characters"
                    width={500}
                    height={500}
                    className="object-cover border-4 border-black w-full h-full "
                  />
                </motion.div>
                <p className="lg:text-right font-outfit text-black text-base lg:text-md mt-2">
                  Kyomoto (京本 Kyōmoto)
                </p>
              </motion.div>

              <div className="w-full lg:w-2/5 space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold font-outfit text-black mb-4">
                  KYOMOTO <span className="ml-1 text-2xl">京本</span>
                </h3>
                <p className="text-base lg:text-lg font-outfit text-black leading-relaxed">
                  Kyomoto, en cambio, es el reverso de Fujino. Una chica
                  introvertida, reservada y profundamente sensible, que
                  encuentra en el dibujo su refugio frente a un mundo que la
                  abruma. Mientras Fujino brilla en público, Kyomoto vive hacia
                  adentro: pasa sus días encerrada, dibujando en silencio, como
                  si el arte fuera su única forma de comunicarse con los demás.
                  Su talento no nace del deseo de destacar, sino de una
                  necesidad vital: dibujar es la manera que tiene de existir, de
                  darle forma a sus emociones.
                </p>
                <div className="w-full flex">
                  <Image
                    src="/img/video3.gif"
                    alt="Look Back Characters"
                    width={400}
                    height={110}
                    className="object-cover border-3 border-black w-full h-[110px]"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 2 */}
        <section className="p-8 lg:p-16 bg-[#E8E3D9]">
          <div className="w-full mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold font-outfit mb-12 text-black text-center">
              PELICULA <br></br>{" "}
              <span className="text-2xl lg:text-2xl font-light">
                ルックバック
              </span>
            </h2>
            <Carousel className="w-full max-w-14xl mx-auto relative">
              <CarouselContent className="-ml-2 md:-ml-4">
                {youtubeVideos.map((video, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2"
                  >
                    <div className="relative w-full aspect-video p-2">
                      <iframe
                        className="w-full h-full border-4 border-black rounded-sm"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-black left-8 top-1/2 -translate-y-1/2" />
              <CarouselNext className="border-black right-8 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>

          <div className="mx-auto mt-16 px-2">
            {/* Reparto */}
            <div className="mb-16">
              <h3 className="text-3xl lg:text-2xl font-outfit mb-6 text-black ">
                REPARTO Y EQUIPO
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-8 gap-2">
                {cast.map((person, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card className="overflow-hidden border-0 shadow-none rounded-none max-w-[250px]">
                      <motion.div
                        className="relative w-full aspect-square"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <CardHeader className="p-3">
                        <CardTitle className="text-base p-0 m-0 mb-1">
                          {person.name}
                        </CardTitle>
                        <CardDescription className="text-sm font-outfit text-gray-400">
                          {person.role}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 px-2">
            <h3 className="text-3xl lg:text-2xl font-outfit mb-6 text-black ">
              FESTIVALES Y PREMIOS
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-10 gap-2">
              {festivals.map((festival, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden border-0 shadow-none rounded-none max-w-[300px]">
                    <motion.div
                      className="relative w-full aspect-square"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={festival.image}
                        alt={festival.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm font-outfit text-gray-400 ">
                        {festival.name}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección 3 */}
        <div className="w-full">
          <section className="w-full min-h-screen pt-16 lg:pt-35 lg:p-16 bg-[#F5F1E8]">
            <div className="max-w-5xl w-full mx-auto text-center mb-10">
              <h2 className="text-4xl lg:text-5xl font-bold font-outfit mb-8 text-black">
                MANGA
              </h2>
              <p className="text-lg font-outfit text-black">
                Look Back es un one-shot (historia autoconclusiva) escrito y
                dibujado por Tatsuki Fujimoto, publicado el 19 de julio de 2021
                en la plataforma Shonen Jump+. No pertenece a una serie ni tiene
                tomos adicionales: es una única historia de 143 páginas, pensada
                para leerse de principio a fin en una sola sesión. Fujimoto
                escribió y dibujó Look Back prácticamente en solitario, y muchos
                lectores lo consideran su trabajo más personal y emocionalmente
                sincero. Después del éxito de Chainsaw Man, decidió hacer una
                pausa de la acción y el caos que lo caracterizan, para crear una
                obra íntima, silenciosa y humana. El título, Look Back, juega
                con la idea de “mirar atrás”: una metáfora sobre la memoria, la
                culpa y el crecimiento personal. En entrevistas, Fujimoto
                explicó que quería reflejar la sensación de mirar al pasado y
                sentir tanto orgullo como arrepentimiento.
              </p>
            </div>
            <div className="max-w-6xl mx-auto pt-10">
              <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16 px-4">
                <div className="w-full lg:w-2/5">
                  <h2 className="text-2xl lg:text-3xl font-bold font-outfit text-black mb-4">
                    EL PROCESO
                  </h2>
                  <p className="text-base lg:text-lg font-outfit text-black leading-relaxed">
                    Cuando Tatsuki Fujimoto escribió Look Back, no buscaba fama
                    ni impacto. Buscaba entender algo que lo estaba doliendo.
                    Venía de un mundo de ruido —Chainsaw Man, Fire Punch—
                    historias donde todo grita, sangra y explota. Pero esta vez,
                    eligió el silencio. Eligió un lápiz, una hoja en blanco, y
                    una historia sobre dos chicas que dibujan. En cada trazo hay
                    algo frío, contenido, como si no quisiera hablar
                    directamente del dolor, sino rodearlo. Fujimoto no describe
                    la tristeza: la deja estar, inmóvil, como una sombra. Look
                    Back parece escrita por alguien que miró atrás demasiado
                    tiempo, que se quedó atrapado entre la culpa y la gratitud,
                    entre lo que pudo haber sido y lo que simplemente fue. No
                    hay consuelo en la historia. No hay moraleja. Solo un
                    intento de darle forma al vacío que deja la pérdida y al
                    peso de seguir creando cuando alguien ya no está. Es una
                    carta que no se atreve a decir "te extraño", pero lo dibuja
                    en cada página. Look Back no busca conmover: busca recordar.
                    Y en ese recuerdo, Fujimoto se muestra como un artista que,
                    por primera vez, no necesita destruir para sentir. Solo
                    mirar atrás, en silencio, y seguir dibujando.
                  </p>
                </div>
                <div className="w-full lg:w-2/5">
                  <Carousel
                    orientation="vertical"
                    className="w-full max-w-md mx-auto"
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                  >
                    <CarouselContent className="-mt-4 h-[600px] lg:h-[700px]">
                      {processImages.map((image, index) => (
                        <CarouselItem
                          key={index}
                          className="pt-4 basis-1/2 lg:basis-1/3"
                        >
                          <motion.div
                            className="relative w-full h-full min-h-[250px] lg:min-h-[300px]"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover border-4 border-black"
                            />
                          </motion.div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="-top-10 lg:-top-12 left-1/2 -translate-x-1/2 border-black" />
                    <CarouselNext className="-bottom-10 lg:-bottom-12 left-1/2 -translate-x-1/2 border-black" />
                  </Carousel>
                </div>
              </div>
            </div>
            <motion.div
              className="w-full max-w-4xl mx-auto flex justify-center items-center mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/img/manga7.jpg"
                alt="Manga 7"
                width={500}
                height={500}
                className="object-cover border-4 border-black w-full h-[180px]"
              />
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
