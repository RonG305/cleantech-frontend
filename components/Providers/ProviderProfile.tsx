import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const ProviderProfile = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Array.from({ length: 30 }).map((_, index) => (
      <div key={index}>
        <Image
          src={"/images/profile.jpg"}
          alt="Provider Profile"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div>
          <h3 className="text-xl font-semibold mt-4">Provider Name</h3>
          <p className="text-muted-foreground text-sm">
            Location: City, Country
          </p>
          {/* rating */}
          <div className="flex items-center">
            <span>
              <Icon icon="solar:star-bold" color="#f2b90a" />
            </span>
            <span>
              <Icon icon="solar:star-bold" color="#f2b90a" />
            </span>
            <span>
              <Icon icon="solar:star-bold" color="#f2b90a" />
            </span>
            <span>
              <Icon icon="solar:star-bold" color="#f2b90a" />
            </span>
            <span>
              <Icon icon="solar:star-linear" />
            </span>
            <span className="ml-1 font-medium">4.5</span>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default ProviderProfile;
