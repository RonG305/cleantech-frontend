"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { providerSidebarItems } from "./sidebarItems";
import { Icon } from "@iconify/react";
const CLEANTECH = '/logos/clean-tech.jpg';

export function ProviderSidebar() {
  const [loading, setLoading] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<any>(null);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Sidebar className="thin-scrollbar" collapsible="icon">
      <SidebarContent className=" thin-scrollbar">
        <SidebarGroup>
          <div className="flex items-center gap-x-4">
            <Image
              src={CLEANTECH}
              alt="CleanTech logo"
              width={60}
              height={60}
              className="rounded-full "
            />
            <div className="text-sm">
              <h2 className="font-extrabold text-2xl">Clean<span className=" italic text-primary">Tech</span></h2>
              <p className="text-xs">
                Welcome, {loggedInUser ? loggedInUser.name : "Guest"}
              </p>
            </div>
          </div>

          <div className="border-b border-gray-300 my-3"></div>
          <SidebarGroupContent className="font-medium">
            {providerSidebarItems.map((item, index) => (
              <Collapsible key={index} defaultOpen={true}>
                <SidebarGroup>
                  <div className="text-sm">
                    <CollapsibleTrigger className="flex items-center justify-between gap-2 text-[16px]">
                      <SidebarMenuItem className="flex gap-2 flex-1">
                        <SidebarMenuButton
                          asChild
                          isActive={
                            item?.url === pathname ||
                            item.children?.some(
                              (child) => child.url === pathname
                            )
                          }
                        >
                          <a
                            href={item.url || "#"}
                            className="font-semibold w-full"
                          >
                            <span className="flex items-center gap-2">
                              <Icon icon={item.icon} fontSize={20}/>
                              {item.title}
                            </span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent>
                    <SidebarMenu className="ml-4">
                      {item.children?.map((child) => (
                        <SidebarMenuItem key={child.title}>
                          <SidebarMenuButton
                            isActive={child.url === pathname}
                            asChild
                          >
                            <a href={child.url} className="">
                              <span className="flex items-center text-muted-foreground gap-2">
                                {child.title}
                              </span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
