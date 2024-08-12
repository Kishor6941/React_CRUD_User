import React, { useCallback, useMemo, useState } from "react";

const ParentC = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const [name, setName] = useState("");

  useMemo(() => {}, []);

  // useCallback(
  //     () => {},
  //     []
  // )

  const calledFirst = () => {
    setCounterOne(counterOne + 1);
  };

  const calledSecond = () => {
    setCounterTwo(counterTwo + 1);
  };

const multiplyToCounter = useMemo(
    () => {
        console.log("called multiplyToCounter", counterOne);
        return counterOne * 10
    },
    [counterOne])

  return (
    <div>
      <div>
        <h3>Counter one is : {counterOne}</h3>
        <h3>Counter two is : {counterTwo}</h3>
      </div>
      <div>
        <h1> CounterOne mulplication {multiplyToCounter}
        </h1>
        <h3>{name}</h3>
        </div>
      <div>
        <button className="btn btn-primary" onClick={calledFirst}>
          CounterOneBtn
        </button>{" "}
        {"  "}
        <button className="btn btn-success" onClick={calledSecond}> 
          CounterTwoBtn
        </button> {" "}
        <button className="btn btn-info" onClick={() =>setName("Kishor Phawade")}>
          changeName
        </button>
      </div>
    </div>
  );
};

export default ParentC;
