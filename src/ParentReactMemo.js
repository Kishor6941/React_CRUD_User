import React, { useCallback, useMemo, useState } from "react";
import ChildC from "./ChildC";

const ParentReactMemo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const [name, setName] = useState("Kishor");


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

  const changeName = useCallback(
    () => {
        setName("Kishor Phawade")
      },
      [name])

  return (
    <div>
      <div>
        <h3>Counter one is : {counterOne}</h3>
        <h3>Counter two is : {counterTwo}</h3>
      </div>
      <ChildC name={name} changeName={changeName}/>
      <div>
        </div>
      <div>
        <button className="btn btn-primary" onClick={calledFirst}>
          CounterOneBtn
        </button>{" "}
        {"  "}
        <button className="btn btn-success" onClick={calledSecond}> 
          CounterTwoBtn
        </button> {" "}
        
      </div>
    </div>
  );
};

export default ParentReactMemo;
