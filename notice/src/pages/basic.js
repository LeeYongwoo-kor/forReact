import RedIsSoHot, { GreenBox, BlueBox } from "../components/box";
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

export default function BasicPage() {
  return (
    <>
      <div>
        <p>
          Welcome! <konbanwa username="Yamamoto!" />
          Can you see my name?
        </p>
        <p>
          Welcome! <Konbanwa username="Chanho!" />
        </p>
      </div>
      <RedIsSoHot />
      <BlueBox />
      <GreenBox />
    </>
  );
}
