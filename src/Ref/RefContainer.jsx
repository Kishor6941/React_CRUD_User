import { useRef } from "react"

const RefContainer = () => {
    let myRef = useRef(null);

    let focusInput = () => {
        myRef.current.focus()
        console.log(myRef.current.value)
    }
    return (
        <div className="col-md-6 m-auto mt-5">
            <input type="text" ref={myRef} className="form-control mb-2" placeholder="Click the button to focus me!"/>
            <button  className="btn btn-dark" onClick={focusInput}>Focus Input</button>
        </div>
    )
}

export default RefContainer