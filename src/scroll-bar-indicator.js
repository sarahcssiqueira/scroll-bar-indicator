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

  const onScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const maxHeight = scrollHeight - clientHeight;
    const scrolledPercent = (scrollTop / maxHeight) * 100;
    setScroll(scrolledPercent);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

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
