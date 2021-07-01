import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(){
        super();
        this.state ={
            count: 4
        };
    }

   handleIncrease = ()=>{
       this.setState({count: this.state.count + 1});
       
   };
   handleDecrease = () => {
       this.setState({count: this.state.count -1})
   }

    render() {
        return (
            <div>
                <h1></h1>
                <h1> Class Counter {this.state.count}</h1>   
                <hr />
               <button onClick = {this.handleIncrease}>Increase Count</button> 
               <button onClick = {this.handleDecrease}> Decrease Count</button> 
            </div>
        );
    }
}      

export default ClassCounter;
