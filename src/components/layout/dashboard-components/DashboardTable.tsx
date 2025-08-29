"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { initialData } from "@/utils/dummyData";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa";

const typeColors: Record<string, string> = {
  Legal: "bg-blue-100 text-blue-700 border border-blue-300",
  "Vendors & Assets": "bg-green-100 text-green-700 border border-green-300",
  Technology: "bg-orange-100 text-orange-700 border border-orange-300",
  Financial: "bg-pink-100 text-pink-700 border border-pink-300",
};

const DashboardTable = () => {
  const [data, setData] = useState(initialData);
  const [allSelected, setAllSelected] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const toggleAll = () => {
    if (allSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((_, i) => i));
    }
    setAllSelected(!allSelected);
  };

  const toggleRow = (i: number) => {
    setSelectedRows((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const toggleSwitch = (i: number, key: "ai" | "dashboard") => {
    const newData = [...data];
    newData[i][key] = !newData[i][key];
    setData(newData);
  };

  const getIcon = (iconName: string) => {
    return iconName === "FaFilePdf" ? (
      <FaFilePdf className="text-xl text-red-500" />
    ) : (
      <IoDocumentTextSharp className="text-xl text-blue-500" />
    );
  };

  return (
    <div className="w-full overflow-x-auto rounded-md border">
      <Table className="min-w-[800px]">
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="w-10">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={toggleAll}
                className="w-4 h-4 border-2 border-gray-300 rounded-sm cursor-pointer"
              />
            </TableHead>
            <TableHead>Document Name</TableHead>
            <TableHead>Document Type</TableHead>
            <TableHead>AI App Inclusion</TableHead>
            <TableHead>Dashboard Inclusion</TableHead>
            <TableHead>Stage Access</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, i) => (
            <TableRow key={i}>
              <TableCell>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(i)}
                  onChange={() => toggleRow(i)}
                  className="w-4 h-4 border-2 border-gray-300 rounded-sm cursor-pointer"
                />
              </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                {getIcon(item.icon)}
                <span className="truncate max-w-[160px]">{item.name}</span>
                <span className="text-xs text-gray-500">({item.size})</span>
              </TableCell>
              <TableCell>
                <Badge className={typeColors[item.type] || "bg-gray-200"}>
                  {item.type}
                </Badge>
              </TableCell>
              <TableCell>
                <Switch
                  checked={item.ai}
                  onCheckedChange={() => toggleSwitch(i, "ai")}
                  className={`${
                    item.ai ? "data-[state=checked]:bg-blue-500" : ""
                  }`}
                />
              </TableCell>
              <TableCell>
                <Switch
                  checked={item.dashboard}
                  onCheckedChange={() => toggleSwitch(i, "dashboard")}
                  className={`${
                    item.dashboard ? "data-[state=checked]:bg-green-500" : ""
                  }`}
                />
              </TableCell>
              <TableCell>
                <Select defaultValue={item.stage}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full">Full</SelectItem>
                    <SelectItem value="Onboarding">Onboarding</SelectItem>
                    <SelectItem value="Franchisee">Franchisee</SelectItem>
                    <SelectItem value="Prospect">Prospect</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell className="flex gap-2 justify-center">
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashboardTable;
