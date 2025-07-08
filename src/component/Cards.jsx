import React from "react";
import {
  EllipsisVertical
} from 'lucide-react';
//import icon from lucide-react
const teamMembers = [
  {
    id: 1,
    name: "Kyle Jenner",
    email: "jenner.kyle@example.com",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Robert Kale",
    email: "robert.kale@example.com",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Kristin Watson",
    email: "georgiayoung@example.com",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Jerome Bell",
    email: "aimalawson@example.com",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Anuj Nainwal",
    email: "ananiwal7@gmail.com",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
   {
    id: 6,
    name: "vandana Nainwal",
    email: "ananiwal7@gmail.com",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
   {
    id: 7,
    name: "ayush Nainwal",
    email: "ananiwal7@gmail.com",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
   {
    id: 8,
    name: "abhijeet Nainwal",
    email: "ananiwal7@gmail.com",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
   {
    id: 9,
    name: "aditya Nainwal",
    email: "ananiwal7@gmail.com",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
];
function Cards() {
    return (
      // This component displays a grid of team member cards
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 p-4">    
      {teamMembers.map((member, index) => (
        <div
          key={`${member.id}-${index}`}
          className="bg-[#F6FDFB] rounded-2xl shadow-lg text-center transition hover:scale-105 duration-300 h-80 sm:h-[360px] lg:h-[400px] flex flex-col w-full max-w-sm mx-auto"
        >
          <div className="text-[#A3EBD6] flex flex-row-reverse mt-4 py-2 text-2xl hover:text-[#85d9c1] pt-4 "><EllipsisVertical size={30}/></div>
          <div className="flex-1 pt-1 sm:pt-2 px-4 ">
            <img
              src={member.image === "#" ? "https://via.placeholder.com/80x80?text=?" : member.image}
              alt={member.name}
              className="w-16 h-16 sm:w-36 sm:h-36 rounded-full mx-auto mb-3 mt-2  object-cover"
            />
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mt-6 mb-2 px-2 leading-tight">
              {member.name}
            </h2>
            <div className="text-xs text-gray-500 px-2 leading-relaxed break-words">
              {member.email}
            </div>
          </div>
          <div className="bg-[#EAFAF6] text-[#7AE1C4] py-4 px-4 rounded-b-2xl text-l font-medium cursor-pointer hover:bg-[#D4F4ED] transition-colors duration-200">
            View Profile
          </div>
        </div>
      ))}

      {/* Add Member Card */}
      <div className="bg-[#F6FDFB] rounded-2xl shadow-lg text-center transition hover:scale-105 duration-300 h-80 sm:h-[360px] lg:h-[400px] flex w-full max-w-sm mx-auto">
        <div className="flex flex-col justify-center items-center mx-auto">
          <div className="bg-[#7AE1C4] w-20 h-20 sm:w-36 sm:h-36 flex justify-center items-center rounded-full text-white text-xl sm:text-8xl font-extrabold pb-5">


            +
          </div>
          
          

          
          <div className="text-[#7AE1C4] pt-6 sm:pt-8 text-lg sm:text-xl">Add Member</div>
        </div>
      </div>
    </div>
  );
}
export default Cards;