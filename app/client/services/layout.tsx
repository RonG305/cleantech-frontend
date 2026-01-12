import { HomepageNavigationMenu } from "@/components/Home/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" min-h-screen">
      <HomepageNavigationMenu />
      <div className="container m-auto px-4">{children}</div>
    </div>
  );
};

export default Layout;
