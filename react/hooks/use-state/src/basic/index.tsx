import { useState } from "react";

function Basic() {
  // 01: common use case
  const myState = useState("Hareesh");
  console.log(myState, "myState");
  console.log(myState[0], "myState[0]");
  console.log(myState[1], "myState[1]");

  // 02: array destructuring assignment -> variable
  const data = useState("Bhittam");
  const [name] = data
  console.log(name,"name before update");

  // 03: array destructuring assignment -> function / destructuring with unused variable
  const [_,setName] = data
  console.log(_,"value____name after update");
  
  // 04:
  const [count, setCount] = useState(0);
  console.log(count, "count");

  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setName("Harry")
        }}
      >
        Click{" "}
      </button>
      <p>Count is : {count}</p>
    </div>
  );
}

export default Basic;
