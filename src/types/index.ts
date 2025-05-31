export interface Project {
  logo: any;
  id: string;
  name: string;
  description: string;
  icon: string;
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
  screenshots: string[];
}

export interface Window {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
  isFocused: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  type: 'project' | 'about' | 'contact' | 'resume';
  projectId?: string;
}

export interface DesktopState {
  windows: Window[];
  activeWindowId: string | null;
  isStartMenuOpen: boolean;
}