import React, { useState } from "react";

const MenuCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < 5) {
      setCount(count + 1);
      console.log(count);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      console.log(count);
    }
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div className="menu-count">
      <button
        className="count-button active"
        onClick={increment}
        disabled={count === 5}
      >
        +
      </button>
      <p>{count}</p>
      <button
        className="count-button active"
        onClick={decrement}
        disabled={count === 0}
      >
        -
      </button>
    </div>
  );
};

export default MenuCounter;
