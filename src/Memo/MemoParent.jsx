import { useMemo, useState } from "react";

const MemoParent = () => {
  const [counter, setCounter] = useState(0);
  let increaseCounter = () => {
    setCounter((perv) => perv + 1);
  };

 

  let bigFun = useMemo(() => {
    console.log('fun called')
    for(let i=0; i<1000000; i++) {
        
    }
     
  },[])

  return (
    <div>
      <h1>Memo Component {counter}</h1>
      <button className="btn btn-dark" onClick={() => increaseCounter()}>
        Counter
      </button>
      {bigFun}
    </div>
  );
};

export default MemoParent;
