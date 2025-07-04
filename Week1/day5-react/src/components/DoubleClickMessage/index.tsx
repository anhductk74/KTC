import React from 'react';

export default function DoubleClickMessage() {
  const [showMessage, setShowMessage] = React.useState(false);

  const handleDoubleClick = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <div>
        <h1>Exercise 7: Double Click Message</h1>
      <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
      {showMessage && <p>Double-clicked!</p>}
    </div>
  );
}
