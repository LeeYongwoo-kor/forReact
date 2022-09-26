import { useState } from "react";
import RedIsSoHot, { BlueBox, GreenBox } from "../components/box";
// deafult -> RedIsSoHot
import CountMan from "../components/countman";
import ObjectMan from "../components/objectman";

function konbanwa({ username }) {
  return (
    <div>{username ? <p>Hello, {username}!</p> : <p>Who are you??</p>}</div>
  );
}
// Component는 소문자로 표현하면 안된다!

function Konbanwa({ username }) {
  return (
    <div>{username ? <p>Hello, {username}!</p> : <p>Who are you??</p>}</div>
  );
}

function Bonjour({ username }) {
  // if (!username) return; -> return undefined. ERROR💀
  if (!username) return null; // Correct!
  return <div>Hello, {username}!</div>;
}

function wrongErrorHandler() {
  throw new Error("Something bad happened!");
  // ErrorBoundary는 Event Handler 내부에서 포착되지 않는다.
  // Event Handler는 Rendering중에서 발생하지 않기 때문에!
  // 때문에 직접 try/catch를 사용해서 에러를 처리하십시오!
}

export default function BasicPage() {
  const [count, setCount] = useState(0);
  const errorHandler = (val) => {
    console.log(val);
    // for re-rendering
    if (val > 30) {
      setCount(val);
    }
  };
  if (count > 30) {
    throw new Error("Something bad happened!");
  }
  return (
    <>
      <ObjectMan />
      <hr />
      <CountMan parents={errorHandler} />
      <hr />
      <div>
        <p>
          Welcome! <konbanwa username="Yamamoto!" />
          Can you see my name?
        </p>
        <p>
          Welcome! <Konbanwa username="Chanho!" />
        </p>
        <p>
          Welcome! <Bonjour username="" />
          <Bonjour username="Pujols!" />
        </p>
        <button onClick={wrongErrorHandler} style={{ backgroundColor: "red" }}>
          ErrorHandler is not working!!
        </button>
        ObjectMan.
      </div>
      <RedIsSoHot />
      <BlueBox />
      <GreenBox />
    </>
  );
}
