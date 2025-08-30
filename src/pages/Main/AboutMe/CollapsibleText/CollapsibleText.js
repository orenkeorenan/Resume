import React, { useState, useRef, useEffect } from "react";

const CollapsibleText = ({ children, isMobile }) => {
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  const allChildren = React.Children.toArray(children);
  const first = allChildren[0];
  const rest = allChildren.slice(1);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(showMore ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [showMore]);

  return (
    <div>
        {first}

        {/* Transition wrapper */}
        <div
            ref={contentRef}
            style={{
                maxHeight: height,
                overflow: "hidden",
                transition: "max-height 0.4s ease",
            }}
        >
            {rest}
        </div>

        {isMobile && rest.length > 0 && (
        <div
            onClick={() => setShowMore(!showMore)}
            style={{
                marginTop: "1rem",
                cursor: "pointer",
                color: "var(--blue-primary)",
                fontWeight: 500,
            }}
        >
            {showMore ? "Show Less" : "Show More"}
        </div>
      )}
    </div>
  );
};

export default CollapsibleText;
