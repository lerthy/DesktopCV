import React, { useEffect, useRef } from 'react';
import { RefreshCwIcon, LayoutGridIcon, EyeIcon, Settings2Icon } from 'lucide-react';
import { useDesktop } from '../context/DesktopContext';

interface RightClickMenuProps {
  x: number;
  y: number;
  onClose: () => void;
}

const RightClickMenu: React.FC<RightClickMenuProps> = ({ x, y, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { openAboutWindow } = useDesktop();
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // Adjust position to ensure menu stays within viewport
  const adjustedX = Math.min(x, window.innerWidth - 200);
  const adjustedY = Math.min(y, window.innerHeight - 220);

  return (
    <div
      ref={menuRef}
      className="absolute bg-gray-800/95 backdrop-blur-md rounded-md shadow-xl border border-gray-700 z-50 w-48 animate-fadeIn"
      style={{ left: adjustedX, top: adjustedY }}
    >
      <div className="py-1">
        <MenuItem 
          icon={<RefreshCwIcon className="w-4 h-4" />}
          label="Refresh"
          onClick={() => {
            onClose();
            window.location.reload();
          }}
        />
        <MenuItem 
          icon={<LayoutGridIcon className="w-4 h-4" />}
          label="View"
          onClick={onClose}
        />
        <MenuItem 
          icon={<EyeIcon className="w-4 h-4" />}
          label="About"
          onClick={() => {
            onClose();
            openAboutWindow();
          }}
        />
        <div className="my-1 border-t border-gray-700"></div>
        <MenuItem 
          icon={<Settings2Icon className="w-4 h-4" />}
          label="Settings"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, onClick }) => {
  return (
    <button 
      className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-left text-gray-200 hover:bg-gray-700 transition-colors"
      onClick={onClick}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
};

export default RightClickMenu;