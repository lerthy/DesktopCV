import React from 'react';
import { useDesktop } from '../context/DesktopContext';
import { UserIcon, MailIcon, FileTextIcon, FolderIcon, GithubIcon, LinkedinIcon, PowerIcon } from 'lucide-react';

const StartMenu: React.FC = () => {
  const { state, dispatch, openAboutWindow, openContactWindow, openResumeWindow } = useDesktop();
  const { isStartMenuOpen } = state;

  if (!isStartMenuOpen) return null;

  const handleItemClick = (action: () => void) => {
    // Close start menu and perform action
    dispatch({ type: 'TOGGLE_START_MENU' });
    action();
  };

  return (
    <div className="absolute bottom-12 left-0 w-64 bg-gray-800/95 backdrop-blur-md rounded-tr-lg rounded-tl-lg shadow-xl border border-gray-700 overflow-hidden z-50 animate-slideUp">
      {/* User Profile */}
      <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center space-x-3">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600">
          <UserIcon className="w-6 h-6" />
        </div>
        <div>
          <div className="text-white font-medium">Lerdi Salihi</div>
          <div className="text-blue-200 text-sm">Wanna be Software Engeenier</div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="p-2">
        <MenuItem 
          icon={<UserIcon className="w-5 h-5" />} 
          label="About Me" 
          onClick={() => handleItemClick(openAboutWindow)} 
        />
        <MenuItem 
          icon={<MailIcon className="w-5 h-5" />} 
          label="Contact" 
          onClick={() => handleItemClick(openContactWindow)} 
        />
        <MenuItem 
          icon={<FileTextIcon className="w-5 h-5" />} 
          label="Resume" 
          onClick={() => handleItemClick(openResumeWindow)} 
        />
        <MenuItem 
          icon={<FolderIcon className="w-5 h-5" />} 
          label="Projects" 
          onClick={() => handleItemClick(() => {})} 
        />
        
        <div className="my-2 border-t border-gray-700"></div>
        
        <MenuItem 
          icon={<GithubIcon className="w-5 h-5" />} 
          label="GitHub" 
          onClick={() => window.open('https://github.com/lerthy', '_blank')} 
        />
        <MenuItem 
          icon={<LinkedinIcon className="w-5 h-5" />} 
          label="LinkedIn" 
          onClick={() => window.open('www.linkedin.com/in/lerdi-salihi-63a146273', '_blank')} 
        />
        
        <div className="my-2 border-t border-gray-700"></div>
        
        <MenuItem 
          icon={<PowerIcon className="w-5 h-5" />} 
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
  return (
    <button 
      className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md text-left text-gray-200 hover:bg-gray-700 transition-colors ${className}`}
      onClick={onClick}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
};

export default StartMenu;