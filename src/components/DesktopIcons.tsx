import React from 'react';
import { useDesktop } from '../context/DesktopContext';
import { useMobile } from '../hooks/useMobile';
import projects from '../data/projects';
import DesktopIcon from './DesktopIcon';
import { FolderIcon, UserIcon, MailIcon, FileTextIcon } from 'lucide-react';

const DesktopIcons: React.FC = () => {
  const { openProjectWindow, openAboutWindow, openContactWindow, openResumeWindow } = useDesktop();
  const { isMobile, isTablet } = useMobile();

  const getGridClass = () => {
    if (isMobile) {
      return 'grid-cols-2 gap-4 p-4';
    } else if (isTablet) {
      return 'grid-cols-3 gap-6 p-6';
    }
    return 'grid-cols-1 gap-6';
  };

  return (
    <div className={`absolute top-4 left-4 ${getGridClass()}`}>
      {/* Project Icons */}
      {projects.map((project) => (
        <DesktopIcon 
          key={project.id}
          icon={
            project.logo ? (
              <img 
                src={project.logo} 
                alt={project.name} 
                className={`object-contain ${
                  isMobile ? 'w-16 h-16' : 'w-26 h-26'
                }`} 
              />
            ) : (
              <FolderIcon className={`text-yellow-400 ${
                isMobile ? 'w-8 h-8' : 'w-12 h-12'
              }`} />
            )
          }
          label={project.name}
          onClick={() => openProjectWindow(project.id)}
        />
      ))}
      
      {/* System Icons */}
      <DesktopIcon 
        icon={<UserIcon className={`text-blue-400 ${
          isMobile ? 'w-8 h-8' : 'w-12 h-12'
        }`} />}
        label="About Me"
        onClick={openAboutWindow}
      />
      
      <DesktopIcon 
        icon={<MailIcon className={`text-green-400 ${
          isMobile ? 'w-8 h-8' : 'w-12 h-12'
        }`} />}
        label="Contact"
        onClick={openContactWindow}
      />
      
      <DesktopIcon 
        icon={<FileTextIcon className={`text-orange-400 ${
          isMobile ? 'w-8 h-8' : 'w-12 h-12'
        }`} />}
        label="Resume"
        onClick={openResumeWindow}
      />
    </div>
  );
};

export default DesktopIcons;