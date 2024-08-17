import { useRef } from "react";

function HorizontallyScrollable({ children, className = "" }) {
  const scrollRef = useRef();

  const handleStart = (evt) => {
    let oldX;
    let scrollLeft;

    if (evt.type === "mousedown") {
      oldX = evt.pageX;
      scrollLeft = scrollRef.current.scrollLeft;
    } else if (evt.type === "touchstart") {
      oldX = evt.touches[0].pageX;
      scrollLeft = scrollRef.current.scrollLeft;
    }

    const handleMove = (evt) => {
      let newX;

      if (evt.type === "mousemove") {
        newX = evt.pageX;
      } else if (evt.type === "touchmove") {
        newX = evt.touches[0].pageX;
      }

      const offset = newX - oldX;

      scrollRef.current.scrollLeft = scrollLeft - offset;
    };

    const handleEnd = () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleEnd);
  };

  return (
    <div
      className={className}
      ref={scrollRef}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
    >
      {children}
    </div>
  );
}

export default HorizontallyScrollable;
