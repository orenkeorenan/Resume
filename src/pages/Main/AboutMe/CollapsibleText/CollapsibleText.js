import React, { useState } from 'react';

const CollapsibleText = ({ children, isMobile }) => {
  const [showMore, setShowMore] = useState(false);

  const allChildren = React.Children.toArray(children);
  const first = allChildren[0];
  const rest = allChildren.slice(1);

  return (
    <div>
      {first}
      {(!isMobile || showMore) && rest}
      {isMobile && rest.length > 0 && !showMore && (
        <div
          onClick={() => setShowMore(true)}
          style={{
            marginTop: "1rem",
            cursor: "pointer",
            color: "var(--blue-primary)",
            fontWeight: 500
          }}
        >
          Show More
        </div>
      )}
    </div>
  );
};

export default CollapsibleText;
