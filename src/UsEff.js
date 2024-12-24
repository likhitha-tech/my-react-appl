import { useEffect } from "react";
import { useState } from "react";

function UsEff()
{
    const[count,setCount]= useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1);
        },300)
    },[]); 
  
return(
  <h1>The page rendered {count} times</h1>
);


}
export default UsEff;