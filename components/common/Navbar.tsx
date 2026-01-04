import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { ThemeToggle } from "./Theme/ThemeToggle";

const Navbar = () => {
  return (
    <div className="bg-transparent p-4 flex justify-between items-center">
      <SidebarTrigger />
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
