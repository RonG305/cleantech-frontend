"use client";

import * as React from "react";
import Link from "next/link";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import { Icon } from "@iconify/react";

const products: {
  title: string;
  href: string;
  subLinks?: { title: string; href: string }[];
  description?: string;
}[] = [
  {
    title: "Residential Cleaning",
    href: "/products/residential-cleaning",
    subLinks: [
      {
        title: "Standard Cleaning",
        href: "/products/residential-cleaning/standard",
      },
      { title: "Deep Cleaning", href: "/products/residential-cleaning/deep" },
      {
        title: "Move-In/Move-Out Cleaning",
        href: "/products/residential-cleaning/move-in-out",
      },
      {
        title: "Post-Construction Cleaning",
        href: "/products/residential-cleaning/post-construction",
      },
      { title: "Green Cleaning", href: "/products/residential-cleaning/green" },
      {
        title: "Sofa & Carpeting Cleaning",
        href: "/products/residential-cleaning/sofa-carpet",
      },
    ],
  },
  {
    title: "Comercial Cleaning",
    href: "/docs/primitives/hover-card",
    subLinks: [
      {
        title: "Office Cleaning",
        href: "/products/comercial-cleaning/office",
      },
      {
        title: "Retail & Mall Cleaning",
        href: "/products/comercial-cleaning/retail-mall",
      },
      {
        title: "Restaurant & Kitchen Cleaning",
        href: "/products/comercial-cleaning/restaurant-kitchen",
      },
      {
        title: "Educational Institution Cleaning",
        href: "/products/comercial-cleaning/educational-institution",
      },
      {
        title: "Healthcare Facility Cleaning",
        href: "/products/comercial-cleaning/healthcare-facility",
      },
    ],
  },
  {
    title: "Industrial Cleaning",
    href: "/products/industrial-cleaning",
    subLinks: [
      {
        title: "Warehouse Cleaning",
        href: "/products/industrial-cleaning/warehouse",
      },
      {
        title: "Factory & Manufacturing Plant Cleaning",
        href: "/products/industrial-cleaning/factory-manufacturing",
      },
      {
        title: "Construction Site Cleaning",
        href: "/products/industrial-cleaning/construction-site",
      },
      {
        title: "Power Plant & Energy Facility Cleaning",
        href: "/products/industrial-cleaning/power-plant-energy",
      },
      {
        title: "Hazardous Material Cleanup",
        href: "/products/industrial-cleaning/hazardous-material",
      },
    ],
  },
  {
    title: "Specialized Services",
    href: "/products/specialized-services",
    subLinks: [
      {
        title: "Fumigation & Pest Control",
        href: "/products/specialized-services/fumigation-pest-control",
      },
      {
        title: "Disinfection & Sanitization",
        href: "/products/specialized-services/disinfection-sanitization",
      },
    ],
  },
  {
    title: "On Demand Services",
    href: "/products/on-demand-services",
    subLinks: [
      {
        title: "Emergency Cleaning",
        href: "/products/on-demand-services/emergency-cleaning",
      },
      {
        title: "Same Day Cleaning",
        href: "/products/on-demand-services/same-day-cleaning",
      },
      {
        title: "Scheduled Recurring Cleaning",
        href: "/products/on-demand-services/scheduled-recurring-cleaning",
      },
    ],
  },
];

const solutions: {
  title: string;
  href: string;
  subLinks?: { title: string; href: string }[];
  description?: string;
}[] = [
  {
    title: "For Individuals",
    href: "/solutions/for-individuals",
    description: "Tailored cleaning solutions to meet your personal needs.",
  },
  {
    title: "For Homes",
    href: "/solutions/for-homes",
    description:
      "Expert cleaning services to keep your home fresh and tidy for Busy professionals, Families, Short Term Rentals.",
  },
  {
    title: "For Businesses",
    href: "/solutions/for-businesses",
    description:
      "Comprehensive cleaning services to keep your workplace spotless. For SMEs, Enterprises, Property Managers, Facility Management Companies and Co-working Spaces.",
  },
  {
    title: "For Institutions",
    href: "/solutions/for-institutions",
    description:
      "Specialized cleaning solutions for educational, healthcare, and governmental institutions.",
  },
  {
    title: "For Property Owners",
    href: "/solutions/for-property-owners",
    description:
      "Reliable cleaning services to maintain and enhance the value of your properties.",
  },
  {
    title: "For Industries",
    href: "/solutions/for-industries",
    description: "Specialized cleaning for various industrial sectors.",
  },
];

const platform: {
  title: string;
  href: string;
  subLinks?: { title: string; href: string }[];
  description?: string;
}[] = [
  {
    title: "Booking & Scheduling",
    href: "/platform/booking-scheduling",
    subLinks: [
      {
        title: "Instant Booking",
        href: "#",
      },
      {
        title: "Recurring Jobs",
        href: "#",
      },
      {
        title: "Multi-Location Booking",
        href: "#",
      },
    ],
  },
  {
    title: "Workforce Management",
    href: "/platform/workforce-management",
    subLinks: [
      {
        title: "Cleaner Assignment",
        href: "#",
      },
      {
        title: "Shift Scheduling",
        href: "#",
      },
      {
        title: "Attendance Tracking",
        href: "#",
      },
      {
        title: "Performance Ratings",
        href: "#",
      },
    ],
  },
  {
    title: "Payments & Billing",
    href: "/platform/payments-billing",
    subLinks: [
      {
        title: "Online Payments",
        href: "#",
      },
      {
        title: "Invoicing",
        href: "#",
      },
      {
        title: "Subscriptions",
        href: "#",
      },
      {
        title: "Corporate Billing",
        href: "#",
      },
    ],
  },
  {
    title: "Customer Management",
    href: "/platform/customer-management",
    subLinks: [
      {
        title: "Customer Profiles",
        href: "#",
      },
      {
        title: "Service History",
        href: "#",
      },
      {
        title: "Preferences",
        href: "#",
      },
    ],
  },
  {
    title: "Integrations",
    href: "/platform/integrations",
    subLinks: [
      {
        title: "Payment Gateways",
        href: "#",
      },
      {
        title: "Accounting Systems",
        href: "#",
      },
      {
        title: "ERP Integrations (Ongoing)",
        href: "#",
      },
    ],
  },
];

const pricing: {
  title: string;
  href: string;
  subLinks?: { title: string; href: string }[];
  description?: string;
}[] = [
  {
    title: "Pay-As-You-Go",
    href: "/pricing/pay-as-you-go",
    description: "Flexible pricing based on individual cleaning sessions.",
  },
  {
    title: "Subscription Plans",
    href: "/pricing/subscription-plans",
    description: "Discounted rates for regular cleaning services.",
  },
  {
    title: "Enterprise Plans",
    href: "/pricing/enterprise-plans",
    description: "Customized solutions for large organizations.",
  },
];

const AuthenticationMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Icon icon={"solar:hamburger-menu-linear"} fontSize={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Register / Login</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button variant={"outline"} className="rounded-full w-full">
            Sign Up
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button className="rounded-full w-full">Login</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export function HomepageNavigationMenu() {
  const isMobile = useIsMobile();

  return (
    <div className=" min-h-19  container m-auto px-8 py-4 items-center flex ">
      <NavigationMenu viewport={isMobile}>
        <NavigationMenuList className="flex-wrap">
          <Link href="/" className={navigationMenuTriggerStyle()}>
            Home
          </Link>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[1000px]">
                {products.map((product) => (
                  <ListItem
                    key={product.title}
                    title={product.title}
                    href={product.href}
                    className="flex flex-col gap-3"
                  >
                    {product.subLinks
                      ? product.subLinks.map((subLink) => (
                          <li className=" ml-2" key={subLink.title}>
                            <Link
                              href={subLink.href}
                              className="text-md font-semibold"
                            >
                              {subLink.title}
                            </Link>
                          </li>
                        ))
                      : null}
                    {product.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[1000px]">
                {solutions.map((solution) => (
                  <ListItem
                    key={solution.title}
                    title={solution.title}
                    href={solution.href}
                    className="flex flex-col gap-3"
                  >
                    {solution.subLinks
                      ? solution.subLinks.map((subLink) => (
                          <li className=" ml-2" key={subLink.title}>
                            <Link
                              href={subLink.href}
                              className="text-md font-semibold"
                            >
                              {subLink.title}
                            </Link>
                          </li>
                        ))
                      : null}
                    {solution.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[1000px]">
                {platform.map((platformItem) => (
                  <ListItem
                    key={platformItem.title}
                    title={platformItem.title}
                    href={platformItem.href}
                    className="flex flex-col gap-2"
                  >
                    {platformItem.subLinks
                      ? platformItem.subLinks.map((subLink) => (
                          <li className=" ml-2 list-disc" key={subLink.title}>
                            <Link
                              href={subLink.href}
                              className="text-md font-semibold"
                            >
                              {subLink.title}
                            </Link>
                          </li>
                        ))
                      : null}
                    {platformItem.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[1000px]">
                {pricing.map((pricingItem) => (
                  <ListItem
                    key={pricingItem.title}
                    title={pricingItem.title}
                    href={pricingItem.href}
                    className="flex flex-col gap-2"
                  >
                    {pricingItem.subLinks
                      ? pricingItem.subLinks.map((subLink) => (
                          <li className=" ml-2 list-disc" key={subLink.title}>
                            <Link
                              href={subLink.href}
                              className="text-md font-semibold"
                            >
                              {subLink.title}
                            </Link>
                          </li>
                        ))
                      : null}
                    {pricingItem.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {isMobile ? (
        <AuthenticationMenu />
      ) : (
        <div className=" ml-auto flex gap-4 mr-4 ">
          <Button variant={"outline"} className="rounded-full">
            Sign Up
          </Button>
          <Button className="rounded-full">Login</Button>
        </div>
      )}
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-base mb-2 leading-none text-primary font-medium">
            {title}
          </div>
          <div className="text-muted-foreground  text-sm flex flex-col gap-3 ">
            {children}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
