"use client";

import { FaUserCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SidebarTrigger } from "../ui/sidebar";

export default function AppNavbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white h-14 border-b justify-between pr-4 flex items-center">
      <SidebarTrigger />
      <div className="flex items-center gap-3">
        <IoSettings className="text-2xl cursor-pointer" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarFallback>
                <FaUserCircle className="text-2xl" />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
