import React, { useState, useEffect, useCallback } from 'react';
import './scroll-bar-indicator.module.css'; // Import the CSS file

const ScrollBar = ( {
    barColor = 'rgb(179, 179, 179)',
    barHeight= '2rem',
    indicatorColor = 'rgb(14, 179, 170)',
    infoColor = 'rgb(51, 51, 51)',
    showInfo = true,
    info = 'Page'
}) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    console.log('Window:', typeof window !== 'undefined');
    console.log('Document:', typeof document !== 'undefined');
  
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const maxHeight = scrollHeight - clientHeight;
        const scrolledPercent = (scrollTop / maxHeight) * 100;
        setScroll(scrolledPercent);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Call it initially to set the correct state on page load
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []); 

  const scrollString = Math.trunc(scroll);

  return (
    <div className="scroll_box">
      <div className="scroll_bar"
            style={{ background: barColor, height: barHeight, }}>
        <div className="scroll_indicator"
            style={{ 
                width: `${scroll}%`, 
                background: indicatorColor, 
                height: barHeight, }}>
        </div>
        {showInfo && ( 
            <p className="scroll_info" 
               style= {{ color: infoColor}}>
                {`${info}${' '}${scrollString}% scrolled`}
            </p>
        )}
      </div>
    </div>
  );
};

export default ScrollBar;
