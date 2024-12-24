
import React from "react"
import Display from "./Display";
class  Menu extends React.Component
{     //declare
    state ={
        person:"likhitha",
        count:0
    }
    //use it
 changeName = ()=>{
    this.setState({person:"Lakshmi"});
}
incCount = () =>    {
        this.setState({count:this.state.count+1});
    }
decCount = () =>{
    this.setState({count:this.state.count-1});
}
componentDidMount(){
    console.log("FIRST");

  }
  componentDidUpdate(){
    console.log("SECOND");

  }
  componentWillUnmount(){
    console.log("tHIRD");

  }
   
    render(){
        
    return <>
    <h1>Hello</h1>
   <h2>Welcome {this.state.person} we are learning statemanagement</h2>
   <h3>count = {this.state.count}</h3>
   <button onClick={this.changeName}>click to change value</button>
   <button onClick={this.incCount}>click to Icrement</button>
   <button onClick={this.decCount}>click to Decrement</button>

   <br></br>

    <img src="person.jpg"></img>
    </>
    }
}
export default Menu;
