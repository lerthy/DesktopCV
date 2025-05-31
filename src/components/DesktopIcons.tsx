import React from 'react';
import { useDesktop } from '../context/DesktopContext';
import projects from '../data/projects';
import DesktopIcon from './DesktopIcon';
import { FolderIcon, UserIcon, MailIcon, FileTextIcon } from 'lucide-react';

const DesktopIcons: React.FC = () => {
  const { openProjectWindow, openAboutWindow, openContactWindow, openResumeWindow } = useDesktop();

  return (
    <div className="absolute top-4 left-4 grid grid-cols-1 gap-6">
      {/* Project Icons */}
      {projects.map((project) => (
      <DesktopIcon 
        key={project.id}
        icon={
        project.logo ? (
          <img src={project.logo} alt={project.name} className="w-26 h-26 object-contain" />
        ) : (
          <FolderIcon className="w-12 h-12 text-yellow-400" />
        )
        }
        label={project.name}
        onClick={() => openProjectWindow(project.id)}
      />
      ))}
      
      {/* System Icons */}
      <DesktopIcon 
      icon={<UserIcon className="w-12 h-12 text-blue-400" />}
      label="About Me"
      onClick={openAboutWindow}
      />
      
      <DesktopIcon 
      icon={<MailIcon className="w-12 h-12 text-green-400" />}
      label="Contact"
      onClick={openContactWindow}
      />
      
      <DesktopIcon 
      icon={<FileTextIcon className="w-12 h-12 text-orange-400" />}
      label="Resume"
      onClick={openResumeWindow}
      />
    </div>
  );
};

export default DesktopIcons;