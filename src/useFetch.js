import { useEffect,useState } from "react";
import axios from 'axios'

const useFetch = (url) => {
    const [isPending,setIsPending]= useState(true)
    const [error,setError]= useState(null)
    const [data,setData]= useState(null)//renamed to data to make it reusable to things other than blogs


    useEffect(() => {
        axios.get(url)
          .then(response => {
            setData(response.data);
            setIsPending(false);
            setError(null)//remove error msg after success 
          })
          .catch(error => {
            console.error('Error fetching blogs:', error);
            setError(error)
          });
      }, [url]);

        return {data,isPending,error}
    }
 
export default useFetch;