import React from "react";

class Timer extends React.Component{

   state = {
    count: 0,
    count2:0,
    count3:0,
   }

   functionHou =() => {
    this.setState({
        count:this.state.count +1
    })

   }
   functionMint=() => {
    this.setState({
        count2:this.state.count2 +1
    })
    
   }
  
   functionSed =() => {
    this.setState({
        count3:this.state.count3 +1
    })
    
   }
   
   functionHou2 =() => {
    this.setState({
        count:this.state.count -1
    })

   }
   functionMint2=() => {
    this.setState({
        count2:this.state.count2 -1
    })
    
   }
  
   functionSed2 =() => {
    this.setState({
        count3:this.state.count3 -1
    })
    
   }
  
   
     render(){
        return(
            <>
            <div className="outerbox">
            <h5>Current time</h5>
            <div className="naming">
            <h3 className="first">Hours</h3>
            <h3 className="second">Minutes</h3>
            <h3 className="thired">Seconds</h3>
            </div>
                <h1><span className="three">{this.state.count}</span> 
                <span className="one">{this.state.count2}</span> 
                <span className="two">{this.state.count3}</span></h1>

              <div className="button-row">
                 <div className="button-colum" >

                <button onClick={this.functionHou} className="button-space">+</button>
                
                <button onClick={this.functionHou2} className="button-space2">-</button>
                </div>
                <div className="button-colum2">
             
                <button onClick={this.functionMint}className="button-space3">+</button>
                <button onClick={this.functionMint2}className="button-space4">-</button>
                </div>
                <div className="button-colum3">
                
                <button onClick={this.functionSed} className="button-space5">+</button>
                <button onClick={this.functionSed2} className="button-space6">-</button>
                </div> 
        
            </div>
            </div>
               
            </>
        )
     }
}


export default Timer