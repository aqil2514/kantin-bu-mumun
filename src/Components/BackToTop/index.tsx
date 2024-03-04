import NavigationIcon from "@mui/icons-material/Navigation";
import { Fab } from "@mui/material";
import "./index.css";
import React, { useEffect, useState } from "react";

interface PositionYState {
  prev: number;
  current: number;
  next: number;
}

export default function BackToTop() {
  const [positionY, setPositionY] = useState<PositionYState>({ prev: 0, current: 0, next: 0 });
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const scrollHandler = () => {
      setPositionY({ ...positionY, current: window.scrollY });
      // Scroll Down
      if (positionY.next <= positionY.current) {
        buttonRef.current?.classList.add("nav-active");
        setPositionY({ ...positionY, prev: positionY.current - 50, next: positionY.current + 50 });
      }
      // Scroll Up
      if (positionY.prev >= positionY.current) {
        buttonRef.current?.classList.remove("nav-active");
        setPositionY({ ...positionY, prev: positionY.current - 50, next: positionY.current + 50 });
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [positionY]);
  return (
    <Fab
      sx={{ position: "fixed" }}
      className="non-active button"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      variant="extended"
      ref={buttonRef}
    >
      <NavigationIcon sx={{ mr: 1 }} />
      Top
    </Fab>
  );
}
