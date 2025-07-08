import React, { useState } from "react";
import Topbar from "./Topbar";
import TeamCard from "./TeamCard";
import Sidebar from "./Sidebar";

function TeamPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (<div>
    <header  ><Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} /></header>
       <div className="flex"> 
      <Sidebar isOpen={isSidebarOpen} Sidebar/>
      
        
          <TeamCard />
        </div>
    </div>

  );
}

export default TeamPage;