import React, { ReactNode } from 'react';
import { useMobile } from '../hooks/useMobile';
import MobileTouchFeedback from './MobileTouchFeedback';

interface DesktopIconProps {
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, label, onClick }) => {
  const { isMobile, isTablet } = useMobile();

  const getIconSize = () => {
    if (isMobile) {
      return 'w-16 h-16';
    } else if (isTablet) {
      return 'w-20 h-20';
    }
    return 'w-14 h-14';
  };

  const getContainerSize = () => {
    if (isMobile) {
      return 'w-24';
    } else if (isTablet) {
      return 'w-28';
    }
    return 'w-20';
  };

  const getTextSize = () => {
    if (isMobile) {
      return 'text-xs';
    }
    return 'text-sm';
  };

  return (
    <MobileTouchFeedback onClick={onClick}>
      <div className={`flex flex-col items-center ${getContainerSize()} cursor-pointer group`}>
        <div className={`flex items-center justify-center ${getIconSize()} rounded-lg transition-all duration-200 group-hover:bg-white/10 group-active:scale-95 group-touch:bg-white/20`}>
          {icon}
        </div>
        <span className={`mt-1 ${getTextSize()} text-white text-center bg-black/30 px-2 py-1 rounded-md max-w-full truncate whitespace-nowrap leading-tight`}>
          {label}
        </span>
      </div>
    </MobileTouchFeedback>
  );
};

export default DesktopIcon;