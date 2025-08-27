import { useState, useEffect } from "react";

// Define your breakpoints in one place so they're easy to tweak
const breakpoints = {
  mobile: 640,
  tablet: 1024,
};

function getDeviceType(width) {
  if (width <= breakpoints.mobile) return "mobile";
  if (width <= breakpoints.tablet) return "tablet";
  return "desktop";
}

export function useScreenSize() {
  const [device, setDevice] = useState(getDeviceType(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDeviceType(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device; // "mobile" | "tablet" | "desktop"
}
