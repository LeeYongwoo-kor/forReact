import { useState } from "react";

export default function CountMan() {
  const [count, setCount] = useState(0);

  function countHandler() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }
  // setState는 비동기로 동작한다! 때문에 +1씩 늘어난다.

  function countHandlerWithUpdater() {
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  }
  // Updater함수. state를 인자로 받고, 값은 최신값으로 보장된다.

  return (
    <div>
      <div>
        <span>Not Updater: {count}</span>
        <button onClick={countHandler}>COUNTUP X 5</button>
      </div>
      <div>
        <span>Updater: {count}</span>
        <button onClick={countHandlerWithUpdater}>COUNTUP X 5</button>
      </div>
      <button></button>
    </div>
  );
}
