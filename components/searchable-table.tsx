"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input"; // ShadCN Input
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Image from "next/image";
import rimage from "@/assets/images/react-native-48.png";

import { ArrowUpRight } from "lucide-react";


const sampleData = [
  {
    id: 1,
    productName: "Spaghetti",
    productImage: "product-image-url", // Replace with the actual URL of the product image
    date: "24 Apr '2024",
    time: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$55",
    chatLink: "view-chat-url" // Replace with the actual link to view the chat
  },
  {
    id: 2,
    productName: "Spatula",
    productImage: "product-image-url",
    date: "24 Apr '2024",
    time: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$55",
    chatLink: "view-chat-url"
  },
  {
    id: 3,
    productName: "Surfboard",
    productImage: "product-image-url",
    date: "24 Apr '2024",
    time: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$55",
    chatLink: "view-chat-url"
  },
  {
    id: 4,
    productName: "Camel",
    productImage: "product-image-url",
    date: "24 Apr '2024",
    time: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$55",
    chatLink: "view-chat-url"
  }
];

export function SearchableTable() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the data based on the search term
  const filteredData = sampleData.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="flex gap-3 items-center">
      <h2 className="text-[#212636] font-medium text-[16px]">Find Products</h2>
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-sm"
      />

      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-[8px] min-h-[400px]">
        <Table className="p-4">
          <TableHeader className="border-b border-gray-200 bg-[#F9FAFB]">
            <TableRow className="text-[#FFFFFF01]">
              <TableHead>Product</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time spent</TableHead>
              <TableHead>Order Value</TableHead>
              <TableHead>Commission</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-[#212636]" >
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <TableRow key={item.id}
                className="transition-all  ease-in-out transform hover:bg-muted border border-gray-200"
                >
                  <TableCell className="flex gap-2 items-center"><Image alt={"product_image"} src={rimage}/>{item.productName}</TableCell>
                  <TableCell className="flex-col">{item.date}<p className="text-[12px]">{item.time}</p></TableCell>
                  <TableCell>{item.timeSpent}</TableCell>
                  <TableCell>{item.orderValue}</TableCell>
                  <TableCell className="text-[#212636] font-bold">{item.commission}</TableCell>
                  <TableCell className=" flex-1 items-center gap-2 text-gray-500"><p className="flex items-center gap-2">View Chat <ArrowUpRight/></p></TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
