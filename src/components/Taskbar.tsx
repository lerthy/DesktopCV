import React from 'react';
import { useDesktop } from '../context/DesktopContext';
import { useMobile } from '../hooks/useMobile';
import { AppWindowIcon, FolderIcon, UserIcon, MailIcon, FileTextIcon, MenuIcon } from 'lucide-react';
import Clock from './Clock';

const Taskbar: React.FC = () => {
  const { state, dispatch } = useDesktop();
  const { isMobile, isTablet } = useMobile();
  const { windows, activeWindowId } = state;

  const handleStartClick = () => {
    dispatch({ type: 'TOGGLE_START_MENU' });
  };

  const handleTaskbarItemClick = (windowId: string) => {
    const window = windows.find(w => w.id === windowId);
    if (!window) return;

    if (window.isMinimized || !window.isFocused) {
      dispatch({ type: 'FOCUS_WINDOW', payload: windowId });
    } else {
      dispatch({ type: 'MINIMIZE_WINDOW', payload: windowId });
    }
  };

  const getIconForWindow = (type: string, projectId?: string) => {
    const iconSize = isMobile ? 'w-4 h-4' : 'w-5 h-5';
    switch (type) {
      case 'project':
        return <FolderIcon className={iconSize} />;
      case 'about':
        return <UserIcon className={iconSize} />;
      case 'contact':
        return <MailIcon className={iconSize} />;
      case 'resume':
        return <FileTextIcon className={iconSize} />;
      default:
        return <AppWindowIcon className={iconSize} />;
    }
  };

  const getTaskbarHeight = () => {
    if (isMobile) {
      return 'h-16';
    }
    return 'h-12';
  };

  const getStartButtonSize = () => {
    if (isMobile) {
      return 'h-12 w-12';
    }
    return 'h-10 w-10';
  };

  const getMenuIconSize = () => {
    if (isMobile) {
      return 'w-7 h-7';
    }
    return 'w-6 h-6';
  };

  return (
    <div className={`absolute bottom-0 left-0 right-0 ${getTaskbarHeight()} bg-gray-800/80 backdrop-blur-md border-t border-gray-700 flex items-center px-2 z-50`}>
      {/* Start Button */}
      <button 
        className={`${getStartButtonSize()} rounded-full flex items-center justify-center text-white hover:bg-gray-700 active:bg-gray-600 transition-colors touch-manipulation`}
        onClick={handleStartClick}
      >
        <MenuIcon className={getMenuIconSize()} />
      </button>

      {/* Divider */}
      <div className="h-8 w-px bg-gray-700 mx-2"></div>

      {/* Open Windows */}
      <div className="flex-1 flex items-center space-x-1 overflow-x-auto scrollbar-hide">
        {windows.filter(w => w.isOpen).map(window => (
          <button
            key={window.id}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-md transition-colors touch-manipulation ${
              isMobile ? 'min-w-[120px]' : ''
            } ${
              window.isFocused && !window.isMinimized
                ? 'bg-gray-700 text-white'
                : 'text-gray-300 hover:bg-gray-700/50 active:bg-gray-600'
            }`}
            onClick={() => handleTaskbarItemClick(window.id)}
          >
            {getIconForWindow(window.type, window.projectId)}
            <span className={`truncate ${isMobile ? 'text-xs max-w-[80px]' : 'text-sm max-w-[120px]'}`}>
              {window.title}
            </span>
          </button>
        ))}
      </div>

      {/* Clock */}
      <Clock />
    </div>
  );
};

export default Taskbar;