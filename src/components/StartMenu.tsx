import React from 'react';
import { useDesktop } from '../context/DesktopContext';
import { useMobile } from '../hooks/useMobile';
import { UserIcon, MailIcon, FileTextIcon, FolderIcon, GithubIcon, LinkedinIcon, PowerIcon } from 'lucide-react';

const StartMenu: React.FC = () => {
  const { state, dispatch, openAboutWindow, openContactWindow, openResumeWindow } = useDesktop();
  const { isMobile, isTablet } = useMobile();
  const { isStartMenuOpen } = state;

  if (!isStartMenuOpen) return null;

  const handleItemClick = (action: () => void) => {
    // Close start menu and perform action
    dispatch({ type: 'TOGGLE_START_MENU' });
    action();
  };

  const getMenuWidth = () => {
    if (isMobile) {
      return 'w-full';
    } else if (isTablet) {
      return 'w-80';
    }
    return 'w-64';
  };

  const getMenuPosition = () => {
    if (isMobile) {
      return 'bottom-16 left-0 right-0';
    }
    return 'bottom-12 left-0';
  };

  const getProfileSize = () => {
    if (isMobile) {
      return 'w-16 h-16';
    }
    return 'w-12 h-12';
  };

  const getIconSize = () => {
    if (isMobile) {
      return 'w-7 h-7';
    }
    return 'w-6 h-6';
  };

  const getMenuItemIconSize = () => {
    if (isMobile) {
      return 'w-6 h-6';
    }
    return 'w-5 h-5';
  };

  const getMenuItemPadding = () => {
    if (isMobile) {
      return 'px-6 py-4';
    }
    return 'px-4 py-2';
  };

  return (
    <div className={`absolute ${getMenuPosition()} ${getMenuWidth()} bg-gray-800/95 backdrop-blur-md rounded-tr-lg rounded-tl-lg shadow-xl border border-gray-700 overflow-hidden z-50 animate-slideUp`}>
      {/* User Profile */}
      <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center space-x-3">
        <div className={`${getProfileSize()} bg-white rounded-full flex items-center justify-center text-blue-600`}>
          <UserIcon className={getIconSize()} />
        </div>
        <div>
          <div className="text-white font-medium">Lerdi Salihi</div>
          <div className="text-blue-200 text-sm">Wanna be Software Engeenier</div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="p-2">
        <MenuItem 
          icon={<UserIcon className={getMenuItemIconSize()} />} 
          label="About Me" 
          onClick={() => handleItemClick(openAboutWindow)} 
        />
        <MenuItem 
          icon={<MailIcon className={getMenuItemIconSize()} />} 
          label="Contact" 
          onClick={() => handleItemClick(openContactWindow)} 
        />
        <MenuItem 
          icon={<FileTextIcon className={getMenuItemIconSize()} />} 
          label="Resume" 
          onClick={() => handleItemClick(openResumeWindow)} 
        />
        <MenuItem 
          icon={<FolderIcon className={getMenuItemIconSize()} />} 
          label="Projects" 
          onClick={() => handleItemClick(() => {})} 
        />
        
        <div className="my-2 border-t border-gray-700"></div>
        
        <MenuItem 
          icon={<GithubIcon className={getMenuItemIconSize()} />} 
          label="GitHub" 
          onClick={() => window.open('https://github.com/lerthy', '_blank')} 
        />
        <MenuItem 
          icon={<LinkedinIcon className={getMenuItemIconSize()} />} 
          label="LinkedIn" 
          onClick={() => window.open('www.linkedin.com/in/lerdi-salihi-63a146273', '_blank')} 
        />
        
        <div className="my-2 border-t border-gray-700"></div>
        
        <MenuItem 
          icon={<PowerIcon className={getMenuItemIconSize()} />} 
          label="Shut Down" 
          onClick={() => {}} 
          className="text-red-400 hover:text-red-300"
        />
      </div>
    </div>
  );
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, onClick, className = '' }) => {
  const { isMobile } = useMobile();
  
  const getPadding = () => {
    if (isMobile) {
      return 'px-6 py-4';
    }
    return 'px-4 py-2';
  };

  const getTextSize = () => {
    if (isMobile) {
      return 'text-lg';
    }
    return 'text-base';
  };

  return (
    <button 
      className={`w-full flex items-center space-x-3 ${getPadding()} rounded-md text-left text-gray-200 hover:bg-gray-700 active:bg-gray-600 transition-colors touch-manipulation ${className}`}
      onClick={onClick}
    >
      <span>{icon}</span>
      <span className={getTextSize()}>{label}</span>
    </button>
  );
};

export default StartMenu;