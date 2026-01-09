import ProviderBanner from "@/components/Providers/ProviderBanner";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div>
      <ProviderBanner
        name="SparklePro Cleaners"
        tagline="Premium home & office cleaning"
      />
    </div>
  );
};

export default page;
