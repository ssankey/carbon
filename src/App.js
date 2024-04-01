// App.js
import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import MainContent from './components/mainContent';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = (isOpen) => {
    setIsOpen(isOpen);
  };

  return (
    <div className="flex bg-[#0b0b0b] h-screen">
      <Sidebar onToggle={toggleSidebar} />
      <MainContent isOpen={isOpen} />
    </div>
  );
}

export default App;