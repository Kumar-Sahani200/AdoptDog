"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroGallery = () => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (lightboxImage) {
        if (event.key === "ArrowLeft") {
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? currentIndex : prevIndex - 1
          );
        } else if (event.key === "ArrowRight") {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? currentIndex : prevIndex + 1
          );
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage, currentIndex]);

  const openLightbox = (imageUrl, index) => {
    setLightboxImage(imageUrl);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setCurrentIndex(0);
  };

  const images = [
    "/images/snowpee1.png",
    "/images/sparky2.jpeg",
    "/images/cat1.png",

    "/images/chote1.png",

    "/images/alexsister.jpg",
    "/images/chote.jpg",
    "/images/alex.jpeg",
    "/images/sparky1.jpeg",
    "/images/puppy1.png",
    "/images/dogs.jpeg",
    "/images/snowpee.jpg",
  ];

  return (
    <div className="columns-2 md:columns-2 lg:columns-3 xl:max-w-5xl mx-auto gap-4 mt-10 break-inside-avoid space-y-4">
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="outline"
              className="absolute top-4 right-4 text-white bg-secondary hover:text-black hover:bg-primary hover:border-solid hover:border-black focus:outline-none z-10 opacity-60"
              onClick={closeLightbox}
            >
              Close
            </Button>
            <div className="relative">
              <Image
                src={images[currentIndex]}
                alt=""
                layout="responsive"
                width={1000}
                height={1000}
                className="rounded-lg max-w-4xl h-auto"
              />
              <div
                className="absolute top-0 left-0 bottom-0 w-1/2 flex justify-center items-center cursor-pointer opacity-50 hover:opacity-100"
                onClick={() =>
                  setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? currentIndex : prevIndex - 1
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div
                className="absolute top-0 right-0 bottom-0 w-1/2 flex justify-center items-center cursor-pointer opacity-50 hover:opacity-100"
                onClick={() =>
                  setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1
                      ? currentIndex
                      : prevIndex + 1
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
      {images.map((imageUrl, index) => (
        <div key={index} onClick={() => openLightbox(imageUrl, index)}>
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg cursor-pointer transition duration-300 hover:scale-105"
            src={imageUrl}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default HeroGallery;
