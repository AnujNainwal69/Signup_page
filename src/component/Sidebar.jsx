import React from "react";
import {
  HomeIcon, UsersIcon, BriefcaseIcon, CalendarIcon,
  InboxIcon, ClockIcon, FileTextIcon, ShieldIcon, HelpCircleIcon,
} from 'lucide-react';

const sidebarItems = [
  { name: "Dashboard", icon: <HomeIcon size={20} /> },
  { name: "Team Members", icon: <UsersIcon size={20} /> },
  { name: "Projects", icon: <BriefcaseIcon size={20} /> },
  { name: "Calendar", icon: <CalendarIcon size={20} /> },
  { name: "Inbox", icon: <InboxIcon size={20} /> },
  { name: "Timesheet", icon: <ClockIcon size={20} /> },
  { name: "Reports", icon: <FileTextIcon size={20} /> },
  { name: "Administration", icon: <ShieldIcon size={20} /> },
  { name: "Help", icon: <HelpCircleIcon size={20} /> },
];

export default function Sidebar( ) {
  return (
    <aside className={`bg-white w-64 mt-8   p-6 space-y-4 left-0 transition-transform duration-300 transform
       sm:translate-x-0  `}>
  
      <ul className="space-y-4">
        {sidebarItems.map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-700 hover:text-green-500 transition cursor-pointer">
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
