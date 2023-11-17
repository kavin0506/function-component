import { Component } from "react";

class ListClass extends Component{
    render(){
        const {sportsName}=this.spo
    const result=sportsName.map((v)=>{
        return(

                <li>{v.sname}</li>
        )
    })
        return(
            <div className="game">
            <h2>Sports</h2>
        <ul>
            {result}
        </ul>
        </div>
        )
    }
}