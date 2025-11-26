import { Image } from "@builder.io/react";
import React from "react";

interface HeroProps {
  image?: string;
  imageMobile?: string;
  imageAltText?: string;
  heroCopy?: string;
  heroSubText?: string;
}

export default function Hero({
  image,
  imageMobile,
  imageAltText = "Hero image",
  heroCopy,
  heroSubText,
}: HeroProps) {
  // Use mobile image on smaller screens, desktop on larger
  const displayImage = image || imageMobile;

  return (
    <div className="hero-container">
      <picture>
        {imageMobile && (
          <source media="(max-width: 768px)" srcSet={imageMobile} />
        )}
        <img
          src={displayImage}
          alt={imageAltText}
          className="hero-image"
        />
      </picture>
      <div className="hero-text-overlay">
        {heroCopy && <h4 className="hero-copy">{heroCopy}</h4>}
        {heroSubText && <h6 className="hero-sub-text">{heroSubText}</h6>}
      </div>
    </div>
  );
}
