import React from 'react';
import { useDesktop } from '../context/DesktopContext';
import Window from './Window';

const WindowManager: React.FC = () => {
  const { state } = useDesktop();
  const { windows } = state;

  // Sort windows by z-index
  const sortedWindows = [...windows].sort((a, b) => a.zIndex + b.zIndex);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {sortedWindows.map(window => (
        window.isOpen && (
          <div key={window.id} className="pointer-events-auto">
            <Window window={window} />
          </div>
        )
      ))}
    </div>
  );
};

export default WindowManager;