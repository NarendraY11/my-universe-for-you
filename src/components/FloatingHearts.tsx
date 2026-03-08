import { useEffect, useCallback } from "react";

const FloatingHearts = () => {
  const createHeart = useCallback((x: number, y: number) => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.className = "floating-heart";
    heart.style.left = `${x - 10}px`;
    heart.style.top = `${y - 10}px`;
    heart.style.fontSize = `${Math.random() * 14 + 10}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }, []);

  useEffect(() => {
    let throttle = false;
    const handleMove = (e: MouseEvent) => {
      if (throttle) return;
      throttle = true;
      setTimeout(() => (throttle = false), 150);
      createHeart(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [createHeart]);

  return null;
};

export default FloatingHearts;
