import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const ServiceProviders = () => {
  return (
    <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
            <Card className="flex gap-1 p-2">
        <Avatar>
          <AvatarImage src={`/images/profile.jpg`} />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Kerry</h4>
          <p className="text-sm text-muted-foreground line-clamp-3">
            We provide top-notch cleaning services for homes and offices with
            eco-friendly products.
          </p>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-muted-foreground">
              ⭐ 4.8 • 120 reviews
            </span>

            <Link href={`/provider/service-providers/cmtystysttetyrts`}>
              <Button size="sm">View Profile</Button>
            </Link>
          </div>
        </div>
      </Card>
        ))}
    </div>
  );
}


export default ServiceProviders;
