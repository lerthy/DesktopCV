import React from 'react';
import { useDesktop } from '../context/DesktopContext';
import { AppWindowIcon, FolderIcon, UserIcon, MailIcon, FileTextIcon, MenuIcon } from 'lucide-react';
import Clock from './Clock';

const Taskbar: React.FC = () => {
  const { state, dispatch } = useDesktop();
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
    switch (type) {
      case 'project':
        return <FolderIcon className="w-5 h-5" />;
      case 'about':
        return <UserIcon className="w-5 h-5" />;
      case 'contact':
        return <MailIcon className="w-5 h-5" />;
      case 'resume':
        return <FileTextIcon className="w-5 h-5" />;
      default:
        return <AppWindowIcon className="w-5 h-5" />;
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-800/80 backdrop-blur-md border-t border-gray-700 flex items-center px-2 z-50">
      {/* Start Button */}
      <button 
        className="h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
        onClick={handleStartClick}
      >
        <MenuIcon className="w-6 h-6" />
      </button>

      {/* Divider */}
      <div className="h-8 w-px bg-gray-700 mx-2"></div>

      {/* Open Windows */}
      <div className="flex-1 flex items-center space-x-1 overflow-x-auto">
        {windows.filter(w => w.isOpen).map(window => (
          <button
            key={window.id}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-md transition-colors ${
              window.isFocused && !window.isMinimized
                ? 'bg-gray-700 text-white'
                : 'text-gray-300 hover:bg-gray-700/50'
            }`}
            onClick={() => handleTaskbarItemClick(window.id)}
          >
            {getIconForWindow(window.type, window.projectId)}
            <span className="text-sm truncate max-w-[120px]">{window.title}</span>
          </button>
        ))}
      </div>

      {/* Clock */}
      <Clock />
    </div>
  );
};

export default Taskbar;