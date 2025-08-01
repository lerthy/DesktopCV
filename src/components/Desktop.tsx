import React, { useState, useEffect } from 'react';
import { DesktopProvider } from '../context/DesktopContext';
import DesktopIcons from './DesktopIcons';
import Taskbar from './Taskbar';
import WindowManager from './WindowManager';
import StartMenu from './StartMenu';
import RightClickMenu from './RightClickMenu';
import MobileGestureHandler from './MobileGestureHandler';
import { useMobile } from '../hooks/useMobile';

const WALLPAPER_URL = 'https://ijdizbjsobnywmspbhtv.supabase.co/storage/v1/object/public/percv//idk.png';

const Desktop: React.FC = () => {
  const { isMobile, isTablet } = useMobile();
  const [contextMenu, setContextMenu] = useState<{ isOpen: boolean, x: number, y: number }>({
    isOpen: false,
    x: 0,
    y: 0
  });

  const [showPopup, setShowPopup] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };
    
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({
      isOpen: true,
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isMobile) {
      // On mobile, long press could trigger context menu
      const touch = e.touches[0];
      const timer = setTimeout(() => {
        setContextMenu({
          isOpen: true,
          x: touch.clientX,
          y: touch.clientY
        });
      }, 500);

      const handleTouchEnd = () => {
        clearTimeout(timer);
        document.removeEventListener('touchend', handleTouchEnd);
      };

      document.addEventListener('touchend', handleTouchEnd);
    }
  };

  const closeContextMenu = () => {
    setContextMenu({ ...contextMenu, isOpen: false });
  };

  const closePopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  const handleSwipeUp = () => {
    // Could be used to show/hide taskbar or other mobile gestures
    console.log('Swipe up detected');
  };

  const handleSwipeDown = () => {
    // Could be used to show/hide start menu
    console.log('Swipe down detected');
  };

  return (
    <DesktopProvider>
      <MobileGestureHandler
        onSwipeUp={handleSwipeUp}
        onSwipeDown={handleSwipeDown}
      >
        <div 
          className={`relative w-full h-screen overflow-hidden ${
            isMobile ? 'touch-manipulation' : ''
          }`}
          style={{
            backgroundImage: `url(${WALLPAPER_URL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onContextMenu={handleRightClick}
          onTouchStart={handleTouchStart}
          onClick={closeContextMenu}
        >
          {showPopup && (
            <div className={`fixed top-10 left-1/2 transform -translate-x-1/2 bg-white/40 shadow-lg rounded p-6 z-50 max-w-md text-center backdrop-blur ${
              isMobile ? 'mx-4' : ''
            }`}>
              <div className="flex justify-center mb-4">
                <img
                  src="https://ijdizbjsobnywmspbhtv.supabase.co/storage/v1/object/public/percv//profilephoto.jpg"
                  alt="Lerdi Salihi"
                  className={`object-cover rounded-full border-4 border-blue-500 shadow-lg ${
                    isMobile ? 'w-24 h-24' : 'w-40 h-40'
                  }`}
                />
              </div>
              <h2 className="text-xl font-bold mb-2">Welcome!</h2>
              <p className={`mb-4 ${isMobile ? 'text-sm' : ''}`}>
                This is a desktop-like portfolio that showcases my work and projects.<br />
                {isMobile ? 'Tap the icons to explore!' : 'Explore the icons, taskbar, and start menu to learn more!'}
              </p>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 active:bg-blue-800"
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
      </MobileGestureHandler>
    </DesktopProvider>
  );
};

export default Desktop;