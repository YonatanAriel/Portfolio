import styles from "./style.module.css";
import { useState } from "react";

function Tooltip({ text, children }) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}
      {isTooltipVisible && (
        <div
          style={{
            position: "absolute",
            color: "white",
            padding: "0.5em",
            borderRadius: "10px",
            border: "2px solid white",
            bottom: "110%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
            backdropFilter: "blur(50px)",
            backgroundColor: "rgba(0,0,0,1)",
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
