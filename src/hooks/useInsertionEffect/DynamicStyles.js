
import React, { useInsertionEffect, useState } from 'react';

function DynamicStyles() {
  const [color, setColor] = useState('blue');

  useInsertionEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .dynamic-class {
        color: ${color};
        font-size: 20px;
      }
    `;
    document.head.appendChild(styleElement);

    // Cleanup the style on unmount
    return () => {
      document.head.removeChild(styleElement);
    };
  }, [color]);

  return (
    <div>
      <p className="dynamic-class">This text is styled dynamically.</p>
      <button onClick={() => setColor('red')}>Change to Red</button>
      <button onClick={() => setColor('green')}>Change to Green</button>
    </div>
  );
}

export default DynamicStyles;
