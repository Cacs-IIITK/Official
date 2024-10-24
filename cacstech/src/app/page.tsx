"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import NavComp from "@/components/Nav";
import ImageCaras from "@/components/ImageCarasoul";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const originalImages = [
  { src: "/ganesh.jpeg", title: "GANESH CHATHURTHI" },
  { src: "/cacscore.jpeg", title: "CORE TEAM" },
  { src: "/djnight.jpeg", title: "GARBA GRAVITY" },
];

export default function Page({ font }: { font: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState(originalImages);

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    setImages(shuffleArray(originalImages));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 h-full">
        <div className="relative h-full w-full">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <ImageCaras
                image={image}
                index={index}
                currentIndex={currentIndex}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-40 z-10 pointer-events-none" />

      <div className="absolute p-4 top-4 right-4 z-30 flex gap-4">
        <a
          href="https://www.instagram.com/cacs_iiitkota/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
        >
          <Instagram className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
        >
          <Facebook className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
        >
          <Linkedin className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
        >
          <Youtube className="w-6 h-6 text-white" />
        </a>
      </div>

      <div className="absolute bottom-0 z-20 w-full">
        <NavComp />
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-8 z-20 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75 transition-all duration-300"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-8 z-20 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75 transition-all duration-300"
      >
        &#10095;
      </button>
    </div>
  );
}
