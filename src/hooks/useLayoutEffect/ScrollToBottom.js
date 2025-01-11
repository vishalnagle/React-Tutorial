
import React, { useLayoutEffect, useRef } from "react";

function ScrollToBottom() {
  const listRef = useRef(null);

  useLayoutEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, []);

  // Adjusting the scroll position of an element after it is rendered.




  return (
    <div
      ref={listRef}
      style={{
        height: "200px",
        overflowY: "scroll",
        border: "1px solid black",
      }}
    >
      <div style={{ height: "300px" }}>
        <h1 style={{color:"white"}}>Top Content</h1>
        <h1 style={{color:"white"}}>Scroll Down Content</h1>
      </div>
    </div>
  );
}

export default ScrollToBottom;
