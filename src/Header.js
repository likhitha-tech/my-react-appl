import { useEffect, useState } from 'react';
import Product from './Product';
import './Header.css';
var student="Sai";
function Header()
{
const[counter1,setCounter1]=useState(0);
const[counter2,setCounter2]=useState(0);
const[item,setItem]=useState([]);
const[category,setCategory]=useState(" ")

useEffect(()=>{console.log("First");})
useEffect(()=>{console.log("Second");},[]);
useEffect(()=>{console.log("Third");},[counter1]);

var showProduct=()=>
{
    setCategory(document.getElementById("getDetails").value);
    setItem(Product)
}

    return(
<div>
<h2 >Hi {student} welcome to react components</h2>
<h3>This is function component</h3>
<h2>{counter1}</h2>
<h2>{counter2}</h2>
<button onClick={()=>{setCounter1(counter1+1)}}>click1</button>
<button onClick={()=>{setCounter2(counter2+1)}}>click2</button><br></br>
<input type="text" id="getDetails"></input>
<button onClick={showProduct}>DisplayProducts</button>
{
    //    item.filter((p)=>{return p.pprice>10000})   
    //    item.filter((p)=>{return p.pname == 'Laptop'})   

    item.filter((p)=>{return p.pname == (category)})   
    .map((p)=>{return <h2>

{p.pname},
{p.pprice},
{p.pcat}
    </h2>

    })
}

</div>
    );

}

export default Header;