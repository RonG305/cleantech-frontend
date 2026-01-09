import * as React from "react"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const providers = [
  {
    id: 1,
    name: "SparklePro Cleaners",
    tagline: "Premium home & office cleaning",
    banner: "/banners/cleaning-1.jpg",
  },
  {
    id: 2,
    name: "EcoFresh Services",
    tagline: "Eco-friendly deep cleaning",
    banner: "/banners/cleaning-2.webp",
  },
  {
    id: 3,
    name: "UrbanClean Experts",
    tagline: "Trusted professionals, every time",
    banner: "/banners/cleaning-3.jpg",
  },
  {
    id: 4,
    name: "ShineFast Ltd",
    tagline: "Fast, reliable & affordable",
    banner: "/banners/cleaning-4.jpg",
  },
  {
    id: 5,
    name: "BrightNest Solutions",
    tagline: "Making your space shine",
    banner: "/banners/cleaning-5.jpg",
  },
  {
    id: 6,
    name: "PureSpace Cleaners",
    tagline: "Your cleanliness, our priority",
    banner: "/banners/cleaning-6.jpg",
  },
  {
    id: 7,
    name: "FreshWave Services",
    tagline: "Experience the freshness",
    banner: "/banners/cleaning-7.jpg",
  }
]

export function ServiceProviderCarousel() {
  return (
    <Carousel
      className="relative w-full mt-4"
      opts={{ loop: true }}
    >
      <CarouselContent>
        {providers.map((provider) => (
          <CarouselItem key={provider.id}>
            <div className="relative h-55 sm:h-65 md:h-80 lg:h-95 overflow-hidden rounded-xl">
              
              {/* Banner image */}
              <Image
                src={provider.banner}
                alt={provider.name}
                fill
                priority
                className="object-cover"
              />

              {/* Thin modern overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 text-white">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  {provider.name}
                </h3>
                <p className="text-sm sm:text-base text-white/80 max-w-md">
                  {provider.tagline}
                </p>

                <div className="mt-3">
                  <Button
                    size="sm"
                    className="bg-white text-black hover:bg-white/90"
                  >
                    View Provider
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Controls */}
      <CarouselPrevious className="left-4 bg-white/80 hover:bg-white" />
      <CarouselNext className="right-4 bg-white/80 hover:bg-white" />
    </Carousel>
  )
}
