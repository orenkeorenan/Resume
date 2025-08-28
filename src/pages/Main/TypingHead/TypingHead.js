import { useState, useEffect } from "react";
import { useScreenSize } from "../../../hooks/useScreenSize";

const typingTexts = [
  { id: 1, text: "Software Engineer" },
  { id: 2, text: "Web Developer" },
  { id: 3, text: "React Enthusiast" },
  { id: 4, text: "UI/UX Explorer" },
  { id: 5, text: "Tech Problem Solver" },
  { id: 6, text: "Entrepreneur" },
];

const TypingHead = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = typingTexts[currentIndex].text;

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentIndex]);


  const screen = useScreenSize();
  return (
    <div 
        style={{ 
            fontWeight: "bold",
            textAlign:screen === "desktop"?"left":"center" ,
            margin:"2rem 0",
            color:"var(--olive-light)",
            fontSize:'1.2rem'
        }}
    >
        {displayedText}
      <span className="cursor"></span>

      {/* Inline CSS for cursor */}
      <style>
        {`
          .cursor {
            display: inline-block;
            width: 2px;
            height: 1em;
            background-color: currentColor;
            margin-left: 2px;
            animation: blink 0.7s infinite;
            vertical-align: bottom;
          }

          @keyframes blink {
            0%, 50% { opacity: 1; }
            50.01%, 100% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default TypingHead;
