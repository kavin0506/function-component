import { Component } from "react"

// import { Component } from "react";
class Greet extends Component{
    constructor(){
        super()
        this.state={
            message:"King Kohli",
            count:0,
            make:"Yamaha",
            model:"R15",
            color:"blue"
        }
    }
    changeName(){
                this.setState({
                    message:"number 18"
                })
            }
    incr(){
        this.setState({
            count:this.state.count+1
        })
    }
    decr(){
            this.setState({
                count:this.state.count>0?this.state.count-1:0
            })
        }

   render(){
    const result=()=>{
        this.setState({
            color:"red"
        })
    }
    return(
        <div>
            <h2>Change Name</h2>
            <h3>{this.state.message}</h3>
            <button onClick={()=>this.changeName()}>changeName</button>
            <h2>Increment and decrement</h2>
            <h3>{this.state.count}</h3>
            <button onClick={()=>this.incr()}>Incre</button>
            <button onClick={()=>this.decr()}>Decre</button>
            <h3>{this.state.color}</h3>
            <button onClick={result}>change</button>
        </div>
        
        
    )
   }

    // constructor(){
    //     super()
    //     this.state={
    //         count:0
    //     }
    // }
    // changeNum(){
    //     this.setState({
    //         count:this.state.count+1
    //     })
    // }
    // dec(){
    //     this.setState({
    //         count:this.state.count>0?this.state.count-1:0
    //     })
    // }
    // render(){
    //     return(
    //         <div>
    //             <h1>Hello</h1>
    //             <h2>{this.state.count}</h2>
    //             <button onClick={()=>this.changeNum()}>Incre</button>
    //             <button onClick={()=>this.dec()}>Decre</button>
    //         </div>
    //     )
    // }




    // constructor(){
    //     super()
    //     this.state={
    //         message:"King Kohli"
    //     }
    // }
    //     changeName(){
    //         this.setState({
    //             message:"number 18"
    //         })
    //     }
    // render(){
    //     return(
    //         <div>
    //             <h1>Hi Hello </h1>
    //             <h2>I'M BALA</h2>
    //             <h3>Run Machine {this.state.message}</h3>
    //             <button onClick={()=>this.changeName()}>change</button>
    //             {/* <h3>Bala  is {this.props.use} his age {this.props.age}</h3>? */}

    //         </div>
            
        

    //     )
    // }
       
    
}

export  default Greet ;