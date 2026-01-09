import React from "react";
import ProviderProfile from "./ProviderProfile";
import { ServiceProviderCarousel } from "./ServiceProviderCarousel";
import { ProviderProfileDescriptionCard } from "./ProviderProfileDescriptionCard";

const cleaningProviders = [
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
  },
  {
    id: 7,
    name: "CleanLiving Co.",
    tagline: "Healthy homes, happy lives",
    banner: "/banners/cleaning-8.jpg",
  },
  {
    id: 8,
    name: "Spotless Solutions",
    tagline: "Detail-oriented cleaning experts",
    banner: "/banners/cleaning-9.jpg",
  },
];

const ServiceProviders = () => {
  return (
    <>
      <ServiceProviderCarousel />
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {cleaningProviders.map((provider) => (
          <ProviderProfileDescriptionCard
            key={provider.id}
            name={provider.name}
            location="New York, USA"
            rating={4.5}
            reviews={120}
            description="We provide top-notch cleaning services for homes and offices with eco-friendly products."
            image="/images/profile.jpg"
          />
        ))}
      </div>
    </>
  );
};

export default ServiceProviders;
