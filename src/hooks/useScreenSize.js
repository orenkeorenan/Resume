import { useState, useEffect } from "react";

const breakpoints = {
  mobile: 640,
  tablet: 1024,
};

function getDeviceType(width, height) {
  const w = Math.min(width, height); // account for rotation
  if (w <= breakpoints.mobile) return "mobile";
  if (w <= breakpoints.tablet) return "tablet";
  return "desktop";
}

export function useScreenSize() {
  const [device, setDevice] = useState(getDeviceType(window.innerWidth, window.innerHeight));

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDeviceType(window.innerWidth, window.innerHeight));
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize); // also listen for rotation

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return device; // "mobile" | "tablet" | "desktop"
}
