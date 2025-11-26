"use client";

import React, { useState } from "react";
import Hero from "./Hero";

interface HeroItem {
  id: string;
  image?: string;
  imageMobile?: string;
  imageAltText?: string;
  heroCopy?: string;
  heroSubText?: string;
}

interface HeroCarouselProps {
  heroes: HeroItem[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

export default function HeroCarousel({
  heroes = [],
  autoplay = false,
  autoplayInterval = 5000,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (!autoplay || heroes.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroes.length);
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [autoplay, autoplayInterval, heroes.length]);

  if (!heroes || heroes.length === 0) {
    return <div className="carousel-empty">No heroes to display</div>;
  }

  const currentHero = heroes[currentIndex];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + heroes.length) % heroes.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroes.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <Hero
          image={currentHero.image}
          imageMobile={currentHero.imageMobile}
          imageAltText={currentHero.imageAltText}
          heroCopy={currentHero.heroCopy}
          heroSubText={currentHero.heroSubText}
        />
      </div>

      {heroes.length > 1 && (
        <>
          <button
            className="carousel-button carousel-button-prev"
            onClick={goToPrevious}
            aria-label="Previous hero"
          >
            ‹
          </button>
          <button
            className="carousel-button carousel-button-next"
            onClick={goToNext}
            aria-label="Next hero"
          >
            ›
          </button>

          <div className="carousel-indicators">
            {heroes.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${
                  index === currentIndex ? "carousel-indicator-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to hero ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
