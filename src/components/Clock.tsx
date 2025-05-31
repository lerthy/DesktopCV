import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      // Format time as HH:MM AM/PM
      const timeString = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
      
      // Format date as Month Day, Year
      const dateString = now.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      
      setTime(timeString);
      setDate(dateString);
    };

    // Update time immediately
    updateTime();
    
    // Update time every minute
    const intervalId = setInterval(updateTime, 60000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-white flex flex-col items-center px-3">
      <div className="text-sm font-medium">{time}</div>
      <div className="text-xs text-gray-300">{date}</div>
    </div>
  );
};

export default Clock;