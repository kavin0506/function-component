import { Component } from "react";

class Table extends Component{
    render(){
        let {team}=this.props
       let ans= team.map((s,n)=>{
                return(
                    <tr key={n}>
                    <td>{s.name}</td>
                    <td>{s.age}</td>
                    <td>{s.role}</td>
                </tr>
                )
               
        })
        return(
            <table>
                <thead>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Role</td>
                </thead>
                <tbody>
                        {ans}
                </tbody>
            </table>
        )
    }
}























// const Table=(props)=>{
//     const {userData}=props
//     const storeData=userData.map((e)=>{
//         return(
//             <tr>
//                 <td>{e.name}</td>
//                 <td>{e.age}</td>
//                 <td>{e.profession}</td>
//             </tr>
//         )
//     })
//     return(
//         <table>
//             <thead>
//                 <th>Name</th>
//                 <th>Age</th>
//                 <th>profession</th>
//             </thead>
//             <tbody>
//                 {storeData}
//             </tbody>
//         </table>
//     )
// }

export default Table;