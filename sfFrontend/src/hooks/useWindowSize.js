import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const isClient = typeof window === "object";
  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(handleMount, []);

  function handleMount() {
    if (!isClient) return false;
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }

  function handleResize() {
    setWindowSize(getSize());
  }

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  return windowSize;
};
