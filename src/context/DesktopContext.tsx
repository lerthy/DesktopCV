import React, { createContext, useContext, useReducer } from 'react';
import { DesktopState, Window } from '../types';
import projects from '../data/projects';

// Initial State
const initialState: DesktopState = {
  windows: [],
  activeWindowId: null,
  isStartMenuOpen: false,
};

// Action Types
type Action =
  | { type: 'OPEN_WINDOW'; payload: Window }
  | { type: 'CLOSE_WINDOW'; payload: string }
  | { type: 'FOCUS_WINDOW'; payload: string }
  | { type: 'MINIMIZE_WINDOW'; payload: string }
  | { type: 'MAXIMIZE_WINDOW'; payload: string }
  | { type: 'RESTORE_WINDOW'; payload: string }
  | { type: 'MOVE_WINDOW'; payload: { id: string; position: { x: number; y: number } } }
  | { type: 'RESIZE_WINDOW'; payload: { id: string; size: { width: number; height: number } } }
  | { type: 'TOGGLE_START_MENU' };

// Reducer
const desktopReducer = (state: DesktopState, action: Action): DesktopState => {
  switch (action.type) {
    case 'OPEN_WINDOW': {
      // Check if window already exists
      const existingWindow = state.windows.find(w => w.id === action.payload.id);
      if (existingWindow) {
        return {
          ...state,
          windows: state.windows.map(window => 
            window.id === existingWindow.id 
              ? { ...window, isOpen: true, isMinimized: false, isFocused: true, zIndex: Math.max(...state.windows.map(w => w.zIndex), 0) + 1 }
              : { ...window, isFocused: false }
          ),
          activeWindowId: existingWindow.id,
        };
      }

      // Add new window
      const maxZIndex = Math.max(...state.windows.map(w => w.zIndex), 0);
      const newWindow = {
        ...action.payload,
        isOpen: true,
        isFocused: true,
        zIndex: maxZIndex + 1,
      };

      return {
        ...state,
        windows: [
          ...state.windows.map(window => ({ ...window, isFocused: false })),
          newWindow,
        ],
        activeWindowId: newWindow.id,
      };
    }

    case 'CLOSE_WINDOW':
      return {
        ...state,
        windows: state.windows.filter(window => window.id !== action.payload),
        activeWindowId: state.activeWindowId === action.payload ? null : state.activeWindowId,
      };

    case 'FOCUS_WINDOW': {
      const maxZIndex = Math.max(...state.windows.map(w => w.zIndex), 0);
      return {
        ...state,
        windows: state.windows.map(window => 
          window.id === action.payload 
            ? { ...window, isFocused: true, zIndex: maxZIndex + 1, isMinimized: false }
            : { ...window, isFocused: false }
        ),
        activeWindowId: action.payload,
      };
    }

    case 'MINIMIZE_WINDOW':
      return {
        ...state,
        windows: state.windows.map(window => 
          window.id === action.payload 
            ? { ...window, isMinimized: true, isFocused: false }
            : window
        ),
        activeWindowId: state.activeWindowId === action.payload ? null : state.activeWindowId,
      };

    case 'MAXIMIZE_WINDOW':
      return {
        ...state,
        windows: state.windows.map(window => 
          window.id === action.payload 
            ? { ...window, isMaximized: true, isFocused: true }
            : { ...window, isFocused: false }
        ),
        activeWindowId: action.payload,
      };

    case 'RESTORE_WINDOW':
      return {
        ...state,
        windows: state.windows.map(window => 
          window.id === action.payload 
            ? { ...window, isMaximized: false, isFocused: true }
            : { ...window, isFocused: false }
        ),
        activeWindowId: action.payload,
      };

    case 'MOVE_WINDOW':
      return {
        ...state,
        windows: state.windows.map(window => 
          window.id === action.payload.id 
            ? { ...window, position: action.payload.position }
            : window
        ),
      };

    case 'RESIZE_WINDOW':
      return {
        ...state,
        windows: state.windows.map(window => 
          window.id === action.payload.id 
            ? { ...window, size: action.payload.size }
            : window
        ),
      };

    case 'TOGGLE_START_MENU':
      return {
        ...state,
        isStartMenuOpen: !state.isStartMenuOpen,
      };

    default:
      return state;
  }
};

// Context
interface DesktopContextType {
  state: DesktopState;
  dispatch: React.Dispatch<Action>;
  openProjectWindow: (projectId: string) => void;
  openAboutWindow: () => void;
  openContactWindow: () => void;
  openResumeWindow: () => void;
}

const DesktopContext = createContext<DesktopContextType | undefined>(undefined);

export const DesktopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(desktopReducer, initialState);

  const openProjectWindow = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const windowId = `project-${projectId}`;
    
    dispatch({
      type: 'OPEN_WINDOW',
      payload: {
        id: windowId,
        title: project.name,
        content: '',
        isOpen: true,
        isFocused: true,
        isMinimized: false,
        isMaximized: false,
        position: { x: 50 + Math.random() * 100, y: 50 + Math.random() * 100 },
        size: { width: 800, height: 600 },
        zIndex: 10,
        type: 'project',
        projectId: projectId,
      },
    });
  };

  const openAboutWindow = () => {
    dispatch({
      type: 'OPEN_WINDOW',
      payload: {
        id: 'about',
        title: 'About Me',
        content: '',
        isOpen: true,
        isFocused: true,
        isMinimized: false,
        isMaximized: false,
        position: { x: 80, y: 80 },
        size: { width: 700, height: 500 },
        zIndex: 10,
        type: 'about',
      },
    });
  };

  const openContactWindow = () => {
    dispatch({
      type: 'OPEN_WINDOW',
      payload: {
        id: 'contact',
        title: 'Contact',
        content: '',
        isOpen: true,
        isFocused: true,
        isMinimized: false,
        isMaximized: false,
        position: { x: 120, y: 120 },
        size: { width: 600, height: 400 },
        zIndex: 10,
        type: 'contact',
      },
    });
  };

  const openResumeWindow = () => {
    dispatch({
      type: 'OPEN_WINDOW',
      payload: {
        id: 'resume',
        title: 'Resume',
        content: '',
        isOpen: true,
        isFocused: true,
        isMinimized: false,
        isMaximized: false,
        position: { x: 150, y: 150 },
        size: { width: 750, height: 800 },
        zIndex: 10,
        type: 'resume',
      },
    });
  };

  return (
    <DesktopContext.Provider 
      value={{ 
        state, 
        dispatch, 
        openProjectWindow, 
        openAboutWindow, 
        openContactWindow, 
        openResumeWindow
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
};

export const useDesktop = (): DesktopContextType => {
  const context = useContext(DesktopContext);
  if (context === undefined) {
    throw new Error('useDesktop must be used within a DesktopProvider');
  }
  return context;
};