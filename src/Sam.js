import React from "react";

class Sam extends React.Component
{
    state=
    {
        city:"Hyderabad"
    }
   changeAddress= ()=>
   {
    this.setState({city:"Bangalore"})
   }
    render()
    {
       return  <>
       <p>Class component does not support multiple inheritance</p>
       <p>my address is {this.state.city}</p>
       <button onClick={this.changeAddress}>click to change address</button>

       </>
    }
}

export default Sam;