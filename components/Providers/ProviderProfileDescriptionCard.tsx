import Image from "next/image"
import { Icon } from "@iconify/react"

import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

type ProviderCardProps = {
  name: string
  location: string
  rating: number
  reviews: number
  image: string
  description: string
}

export function ProviderProfileDescriptionCard({
  name,
  location,
  rating,
  reviews,
  image,
  description,
}: ProviderCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link  href={`/provider/service-providers/cmtystysttetyrts`} className="group cursor-pointer rounded-full  p-4 transition hover:border-2 hover:border-gray-300">
          <div className="flex justify-center">
            <Image
              src={image}
              alt={name}
              width={96}
              height={96}
              className="rounded-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="mt-4 text-center">
            <h3 className="text-base font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{location}</p>

            {/* Rating */}
            <div className="mt-2 flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                  key={i}
                  icon={
                    i < Math.floor(rating)
                      ? "solar:star-bold"
                      : "solar:star-linear"
                  }
                  className="text-yellow-400"
                />
              ))}
              <span className="ml-1 text-sm font-medium">
                {rating.toFixed(1)}
              </span>
            </div>
          </div>
        </Link>
      </HoverCardTrigger>

      {/* Hover content */}
      <HoverCardContent className="w-80">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {description}
            </p>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-muted-foreground">
                ⭐ {rating} • {reviews} reviews
              </span>

              <Link href={`/provider/service-providers/cmtystysttetyrts`}>
                <Button size="sm">View Profile</Button>
              </Link>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
