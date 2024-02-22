import { useState } from 'react';
import TopNav from '@/Components/Admin/TopNav';
import Sidebar from '@/Components/Admin/Sidebar';

export default function Authenticated({ user, header, children }) {
   
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex flex-col flex-1">
        <TopNav toggleSidebar={toggleSidebar}/>
    
        <div className="p-4">
          <h1>{children}</h1>
        </div>
      </div>
    </div>
  );

}
