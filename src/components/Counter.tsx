import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    alert("Why do you want it to reduce no no no!");
    setCount(count - 1);
  };

  return (
    <div style={{margin:'5px', display:"inline-block"}}>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;