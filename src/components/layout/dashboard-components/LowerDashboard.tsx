"use client";

import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoFilterSharp } from "react-icons/io5";
import DashboardTable from "./DashboardTable";

export default function LowerDashboard() {
  return (
    <div className="mt-6 border flex-1 rounded-lg p-4 bg-white shadow-[0_0_5px] shadow-black">
      {/* Header */}
      <div className="flex flex-col items-start justify-between mb-2 border-b">
        <h2 className="text-base font-semibold">My Uploads</h2>
        <p className="text-sm mb-2">Documents that are uploaded by you.</p>
      </div>

      {/* Search + Filter */}
      <div className="mb-4 flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-stretch sm:items-center">
        <div className="relative flex-1 sm:max-w-xs shadow-[0_0_2px] shadow-black rounded-md">
          <CiSearch className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-600 text-xl" />
          <Input placeholder="Search here..." className="pl-8 w-full" />
        </div>

        <Button
          variant="outline"
          size="sm"
          className="cursor-pointer flex items-center gap-1 w-full sm:w-auto"
        >
          <IoFilterSharp /> Filters
        </Button>
      </div>

      {/* Table */}
      <DashboardTable />
    </div>
  );
}
