"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "../ui/sidebar";
import SidebarLogo from "../SidebarLogo";

const sideBarItems = [
  { name: "Home", href: "/" },
  { name: "Stages & Checklist", href: "#" },
  { name: "Upload Docs", href: "#" },
  { name: "Preferred Vendors", href: "#" },
  { name: "Tech Stack", href: "#" },
  { name: "Targets", href: "#" },
  { name: "Zee Sales Targets", href: "#" },
  { name: "MAI Settings", href: "#" },
  { name: "Pending Questions", href: "#" },
];

const AppSidebar = () => {
  return (
    <>
      <Sidebar>
        <SidebarContent className="bg-sky-950 flex flex-col gap-8 justify-between">
          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center mt-10 mb-8 justify-center">
              <SidebarLogo />
            </SidebarGroupLabel>
            <SidebarGroupContent className="border-t">
              <SidebarMenu>
                {sideBarItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start cursor-pointer text-gray-300 hover:bg-sky-900 hover:text-sky-500"
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <Button
            variant="ghost"
            className="w-full justify-start cursor-pointer text-gray-300 hover:bg-sky-900 hover:text-sky-500"
          >
            Logout
          </Button>
        </SidebarContent>
      </Sidebar>
    </>
  );
};

export default AppSidebar;
