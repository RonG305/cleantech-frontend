import React from "react";
import { getServiceCategories } from "./actions";
import CategoriesCard from "./CategoriesCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { ServiceCategory } from "./types";

const Categories = async () => {
  const results = await getServiceCategories();
  const data: ServiceCategory[] = results.data ?? [];

  return (
   <div>
     <Carousel
      opts={{ align: "start", loop: true, slidesToScroll: 1 }}
      className="w-full"
    >
      <CarouselContent>
        {data.map((category) => (
          <CarouselItem
            key={category.id}
            className="basis-full md:basis-1/2 lg:basis-1/3"
          >
            <CategoriesCard
              id={category.id}
              name={category.name}
              description={category.description}
              icon={category.icon}
              is_active={category.is_active}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    {/* Search  */}
    <Input
        type="text"
        placeholder="Search categories..."
        className="mt-6 mb-4 w-full"
    />
   </div>
  );
};

export default Categories;
