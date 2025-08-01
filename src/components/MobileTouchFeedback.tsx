import React, { useState } from 'react';
import { useMobile } from '../hooks/useMobile';

interface MobileTouchFeedbackProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onTouchStart?: () => void;
  onTouchEnd?: () => void;
}

const MobileTouchFeedback: React.FC<MobileTouchFeedbackProps> = ({
  children,
  className = '',
  onClick,
  onTouchStart,
  onTouchEnd
}) => {
  const { isMobile } = useMobile();
  const [isPressed, setIsPressed] = useState(false);

  const handleTouchStart = () => {
    if (isMobile) {
      setIsPressed(true);
      onTouchStart?.();
    }
  };

  const handleTouchEnd = () => {
    if (isMobile) {
      setIsPressed(false);
      onTouchEnd?.();
    }
  };

  const handleClick = () => {
    onClick?.();
  };

  return (
    <div
      className={`${className} ${isMobile ? 'touch-manipulation' : ''} ${
        isPressed ? 'scale-95 opacity-80' : ''
      } transition-all duration-150`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default MobileTouchFeedback; 