"use client";

import { useEffect } from "react";
import { Builder } from "@builder.io/react";
import Hero from "@/components/Hero";
import HeroCarousel from "@/components/HeroCarousel";

export default function BuilderRegistry() {
  useEffect(() => {
    // Register components with Builder on the client side
    Builder.registerComponent(Hero, {
      name: "Hero",
      description: "A hero component with image and text overlay",
      inputs: [
        {
          name: "image",
          type: "file",
          required: false,
          allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
        },
        {
          name: "imageMobile",
          type: "file",
          required: false,
          allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
        },
        {
          name: "imageAltText",
          type: "string",
          required: false,
          defaultValue: "Hero image",
        },
        {
          name: "heroCopy",
          type: "string",
          required: false,
          defaultValue: "Hero Title",
        },
        {
          name: "heroSubText",
          type: "string",
          required: false,
          defaultValue: "Hero subtitle",
        },
      ],
    });

    Builder.registerComponent(HeroCarousel, {
      name: "HeroCarousel",
      description: "A carousel component to display multiple heroes",
      inputs: [
        {
          name: "heroes",
          type: "list",
          required: false,
          defaultValue: [],
          subFields: [
            {
              name: "id",
              type: "string",
            },
            {
              name: "image",
              type: "file",
              allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
            },
            {
              name: "imageMobile",
              type: "file",
              allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
            },
            {
              name: "imageAltText",
              type: "string",
              defaultValue: "Hero image",
            },
            {
              name: "heroCopy",
              type: "string",
            },
            {
              name: "heroSubText",
              type: "string",
            },
          ],
        },
        {
          name: "autoplay",
          type: "boolean",
          required: false,
          defaultValue: false,
        },
        {
          name: "autoplayInterval",
          type: "number",
          required: false,
          defaultValue: 5000,
        },
      ],
    });
  }, []);

  return null; // This component doesn't render anything
}

