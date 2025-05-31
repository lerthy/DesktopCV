import React, { ReactNode } from 'react';

interface DesktopIconProps {
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, label, onClick }) => {
  return (
    <div 
      className="flex flex-col items-center w-20 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-lg transition-all duration-200 group-hover:bg-white/10 group-active:scale-95">
        {icon}
      </div>
      <span className="mt-1 text-sm text-white text-center bg-black/30 px-2 py-1 rounded-md max-w-full truncate whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

export default DesktopIcon;