import RedIsSoHot, { GreenBox, BlueBox } from "../components/box";
import CountMan from "../components/countman";
// deafult -> RedIsSoHot

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

export default function BasicPage() {
  return (
    <>
      <div>
        <CountMan />
      </div>
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
      </div>
      <RedIsSoHot />
      <BlueBox />
      <GreenBox />
    </>
  );
}
