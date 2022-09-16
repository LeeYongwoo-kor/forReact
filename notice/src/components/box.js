export default function RedBox() {
  return <div style={{ backgroundColor: "tomato" }}>Red Party</div>;
}
// default는 하나만 있어야한다.

export function BlueBox() {
  return <div style={{ backgroundColor: "skyblue" }}>Blue Party</div>;
}

export function GreenBox() {
  return <div style={{ backgroundColor: "lawngreen" }}>Green Party</div>;
}
