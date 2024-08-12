import React, { memo } from 'react'

const ChildC = ({name,changeName}) => {
    console.log("child called", name);
    //100
  return (
    <div>
        <h1>Child component { name}</h1>
        <button className="btn btn-info" onClick={changeName}>
          changeName
        </button>
    </div>
  )
}

export default memo(ChildC)