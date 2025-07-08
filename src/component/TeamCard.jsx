import React from "react";
import Cards from "./Cards";


function TeamCard() {
  return (
    <div className="min-h-screen w-screen  p-8">
      <div className="flex flex-row justify-between">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Team Members</h1>
      <h1 className="text-2xl font-bold mb-6 mt-3 text-[#be9c52]">Filter</h1>

      </div>
      <Cards/> 
      
        
    </div>
      
    

  );
}

export default TeamCard;
