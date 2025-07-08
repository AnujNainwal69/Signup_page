import React from "react";
import { BellIcon, Search, SettingsIcon } from 'lucide-react';

export default function Topbar({ toggleSidebar }) {
  return (
    <div className=" flex   sm:px-6 py-4 shadow-md  ">
      {/* Left: Sidebar Toggle + Search */}
      <div className=" flex justify-center w-screen items-center gap-4 ">
       

        {/* Search Bar */}
        <div className="flex  border border-gray-300  bg-pink-50 rounded-2xl px-4 py-2 w-110 items-center">
          <input
            type="text"
            placeholder="Search here..."
            className="outline-none w-full bg-transparent text-gray-600"
          /> 
          <Search className="text-[#233476] cursor-pointer "/>
        </div>
      </div>

      {/* Right: Icons + Admin */}
      <div className=" flex justify-end gap-4 sm:gap-6  w-screen">
        <BellIcon className="text-gray-600 cursor-pointer  " />
        <SettingsIcon className="text-gray-600 cursor-pointer" />
        <div className="flex">
          <div className="hidden sm:block text-gray-800 font-semibold">Anuj </div>
          <div className="hidden sm:block text-gray-800 font-semibold"> Nainwal</div>
        </div>
        
        <div className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full ">AN</div>
      </div>
    </div>
  );
}
