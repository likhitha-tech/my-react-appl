import { useState } from "react";

function StateChange()
{
    const[clr,setColor]=useState("pink");
    const[name,setName]=useState("BREEZA");
    const[cost,setCost]=useState("112345");
        //var clr="pink"
    const[book,setBook]=useState({
        name:"Java",
        author:"Siri",
        cost:"4000"
    })
    const changeVal=()=>{
        setBook(cng=>{
            return{...cng,name:"React",author:"facebook",cost:"7000"};
        });
    }
   return(
        <div>
<h2>My Car color is {clr}</h2>
<h3>My car name is{name}</h3>
<h3>My car Cost is {cost}</h3>

<h2>My Book name is {book.name}. my book author is {book.author}</h2>
<h2>Book Cost is{book.cost}</h2>

<button onClick={()=>setColor("yellow")}>Click</button>
<button onClick={()=>setName("BMW")}>click2</button>
<button onClick={()=>setCost("989877")}>Click3</button>
<button onClick={changeVal}>change</button>
</div>
    );
}
export default StateChange;