import { useState } from "react";

export default function CountMan() {
  const User = {
    name: "Yamamoto",
    age: "19",
    country: "Japan",
    occupation: "teacher",
  };
  const [user, setUser] = useState(User);

  function changeNameHandler(work) {
    const changeName = document.querySelector("input").value;
    if (changeName) {
      User.name = changeName;
    }
    if (!work) {
      setUser(User); // Not Working!
    } else {
      setUser({ ...User, name: changeName });
    }
    console.log(`OBJ: ${User.name}, PREV_STATE: ${user.name}`);
  }
  // State는 불변으로 관리할 것! -> 위의 예시는 State가 안 바뀌었다고 판단하고 아무 작업을 하지 않는다.

  return (
    <div>
      <h1>Username : {user.name}</h1>
      <ul>
        {Object.entries(user).map((entry) => (
          <li key={entry[0]}>{`${entry[0]}: ${entry[1]}`}</li>
        ))}
      </ul>
      <input type="text" placeholder="Change your name" />
      <button onClick={() => changeNameHandler("")}>Change!</button>
      <button onClick={() => changeNameHandler("work")}>
        Change! For Work
      </button>
    </div>
  );
}
