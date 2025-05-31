import React, { useRef, useState, useEffect } from 'react';
import { Window as WindowType } from '../types';
import { X, Minus, Maximize2, Minimize2 } from 'lucide-react';
import { useDesktop } from '../context/DesktopContext';
import ProjectContent from './window-content/ProjectContent';
import AboutContent from './window-content/AboutContent';
import ContactContent from './window-content/ContactContent';
import ResumeContent from './window-content/ResumeContent';

interface WindowProps {
  window: WindowType;
}

const Window: React.FC<WindowProps> = ({ window }) => {
  const { dispatch } = useDesktop();
  const windowRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!windowRef.current) return;
      
      dispatch({
        type: 'MOVE_WINDOW',
        payload: {
          id: window.id,
          position: {
            x: e.clientX - dragOffset.x,
            y: e.clientY - dragOffset.y
          }
        }
      });
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, dragOffset, dispatch, window.id]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!headerRef.current?.contains(e.target as Node)) return;
    
    e.preventDefault();
    dispatch({ type: 'FOCUS_WINDOW', payload: window.id });
    
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - window.position.x,
      y: e.clientY - window.position.y
    });
  };

  const handleClose = () => {
    dispatch({ type: 'CLOSE_WINDOW', payload: window.id });
  };

  const handleMinimize = () => {
    dispatch({ type: 'MINIMIZE_WINDOW', payload: window.id });
  };

  const handleMaximize = () => {
    if (window.isMaximized) {
      dispatch({ type: 'RESTORE_WINDOW', payload: window.id });
    } else {
      dispatch({ type: 'MAXIMIZE_WINDOW', payload: window.id });
    }
  };

  const handleWindowClick = () => {
    dispatch({ type: 'FOCUS_WINDOW', payload: window.id });
  };

  if (window.isMinimized) {
    return null;
  }

  const renderWindowContent = () => {
    switch (window.type) {
      case 'project':
        return <ProjectContent projectId={window.projectId || ''} />;
      case 'about':
        return <AboutContent />;
      case 'contact':
        return <ContactContent />;
      case 'resume':
        return <ResumeContent />;
      default:
        return <div>No content available</div>;
    }
  };

  const windowStyle = window.isMaximized
    ? {
        top: 0,
        left: 0,
        width: '100%',
        height: 'calc(100% - 48px)', // Account for taskbar
      }
    : {
        top: `${window.position.y}px`,
        left: `${window.position.x}px`,
        width: `${window.size.width}px`,
        height: `${window.size.height}px`,
      };

  return (
    <div
      ref={windowRef}
      className={`absolute rounded-lg overflow-hidden flex flex-col bg-white/90 backdrop-blur-md shadow-xl border border-gray-200 transition-shadow ${
        window.isFocused ? 'shadow-2xl' : 'shadow-md'
      }`}
      style={{
        ...windowStyle,
        zIndex: window.zIndex,
      }}
      onClick={handleWindowClick}
    >
      {/* Window Header */}
      <div
        ref={headerRef}
        className={`h-10 flex items-center justify-between px-3 ${
          window.isFocused ? 'bg-gray-800' : 'bg-gray-600'
        }`}
        onMouseDown={handleMouseDown}
      >
        <div className="text-white font-medium truncate">{window.title}</div>
        <div className="flex items-center space-x-2">
          <button
            className="w-6 h-6 flex items-center justify-center rounded-full text-white hover:bg-gray-700 transition-colors"
            onClick={handleMinimize}
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            className="w-6 h-6 flex items-center justify-center rounded-full text-white hover:bg-gray-700 transition-colors"
            onClick={handleMaximize}
          >
            {window.isMaximized ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
          <button
            className="w-6 h-6 flex items-center justify-center rounded-full text-white hover:bg-red-600 transition-colors"
            onClick={handleClose}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto p-4 bg-white">
        {renderWindowContent()}
      </div>
    </div>
  );
};

export default Window;