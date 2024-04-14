//Used to determine if layout should me mobile or desktop
import React, { createContext, useContext, useState, useEffect } from 'react';

const MobileContext = createContext();

export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);
  const [isMobileSmall, setIsMobileSmall] = useState(window.matchMedia("(max-width: 390px)").matches);

  useEffect(() => {
    const mediaQueryMobile = window.matchMedia("(max-width: 768px)");
    const handleChangeMobile = (event) => setIsMobile(event.matches);
  
    mediaQueryMobile.addEventListener('change', handleChangeMobile);
  
    return () => mediaQueryMobile.removeEventListener('change', handleChangeMobile);
  }, []);

  useEffect(() => {
    const mediaQuerySmall = window.matchMedia("(max-width: 390px)");
    const handleChangeSmall = (event) => setIsMobileSmall(event.matches);
  
    mediaQuerySmall.addEventListener('change', handleChangeSmall);
  
    return () => mediaQuerySmall.removeEventListener('change', handleChangeSmall);
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile, isMobileSmall }}>
      {children}
    </MobileContext.Provider>
  );
};

export const useMobile = () => useContext(MobileContext);