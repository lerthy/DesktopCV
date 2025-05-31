import React, { useState } from 'react';
import { DesktopProvider } from '../context/DesktopContext';
import DesktopIcons from './DesktopIcons';
import Taskbar from './Taskbar';
import WindowManager from './WindowManager';
import StartMenu from './StartMenu';
import RightClickMenu from './RightClickMenu';

const WALLPAPER_URL = '/public/assets/idk.png'; // Change this to your image path

const Desktop: React.FC = () => {
  const [contextMenu, setContextMenu] = useState<{ isOpen: boolean, x: number, y: number }>({
    isOpen: false,
    x: 0,
    y: 0
  });

  const [showPopup, setShowPopup] = useState(true);

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({
      isOpen: true,
      x: e.clientX,
      y: e.clientY
    });
  };

  const closeContextMenu = () => {
    setContextMenu({ ...contextMenu, isOpen: false });
  };

  const closePopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  return (
    <DesktopProvider>
      <div 
        className="relative w-full h-screen overflow-hidden"
        style={{
          backgroundImage: `url(${WALLPAPER_URL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onContextMenu={handleRightClick}
        onClick={closeContextMenu}
      >
        {showPopup && (
          <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white/40 shadow-lg rounded p-6 z-50 max-w-md text-center backdrop-blur">
            <div className="flex justify-center mb-4">
              <img
          src="/public/assets/profilephoto.jpg"
          alt="Lerdi Salihi"
          className="w-40 h-40 object-cover rounded-full border-4 border-blue-500 shadow-lg"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">Welcome!</h2>
            <p className="mb-4">
              This is a desktop-like portfolio that showcases my work and projects.<br />
              Explore the icons, taskbar, and start menu to learn more!
            </p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        )}
        <DesktopIcons />
        <WindowManager />
        <Taskbar />
        <StartMenu />
        {contextMenu.isOpen && (
          <RightClickMenu x={contextMenu.x} y={contextMenu.y} onClose={closeContextMenu} />
        )}
      </div>
    </DesktopProvider>
  );
};

export default Desktop;