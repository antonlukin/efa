import { useEffect, useState } from "react";

export default function useFollowCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const trackMouse = (mouseEvent) => {
      setMousePosition({x: mouseEvent.clientX, y: mouseEvent.clientY});
    }

    window.addEventListener('mousemove', trackMouse);

    return () => {
      window.removeEventListener('mousemove', trackMouse);
    };
  }, []);

  return mousePosition;
}