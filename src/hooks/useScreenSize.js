import { useState, useEffect } from "react";

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
  const [device, setDevice] = useState("desktop"); // safe default for SSR

  useEffect(() => {
    // initialize after mount
    const handleResize = () => {
      setDevice(getDeviceType(window.innerWidth));
    };

    handleResize(); // immediately set correct value

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return device;
}
