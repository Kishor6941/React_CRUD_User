
import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data , setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  
    useEffect(() => {
        axios.get(url).then((res) =>{
            setData(res.data)
        }).catch((err) => {
            setErrorMessage(err?.message)
        })
    },[])

    return [data, errorMessage];
}

export default useFetch