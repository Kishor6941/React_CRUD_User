import { useContext, useRef } from "react"
import { sampleContext } from "../contextPrac/SampleContext";

const RefContainer = () => {
    let myRef = useRef(null);
   let {name} = useContext(sampleContext)

    let focusInput = () => {
        myRef.current.focus()
        console.log(myRef.current.value)
    }
    return (
        <div className="col-md-6 m-auto mt-5">
            {name}
            <input type="text" ref={myRef} className="form-control mb-2" placeholder="Click the button to focus me!"/>
            <button  className="btn btn-dark" onClick={focusInput}>Focus Input</button>
        </div>
    )
}

export default RefContainer