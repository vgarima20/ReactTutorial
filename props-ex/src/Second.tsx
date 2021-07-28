import React, {Component} from "react";
interface IState{}
 interface IProps{
   key1 : string;
   key2 : number;
   key3 : any[]
}
 class Second extends Component<IProps,IState>{
     constructor(props:IProps){
         super(props);
     }
     render(){
         return(
             <React.Fragment>
                 <h1>{this.props.key1}</h1>
                 <h1>{this.props.key2}</h1>
                 <table>
                     <tr>
                         <th>SNO</th>
                         <th>NAME</th>
                         <th>PRICE</th>
                         <th>RAITING</th>
                         <th>IMAGE</th>
                     </tr>
                     {this.props.key3.map((element,index)=>(
                         <tr key={index}>
                             <td>{index+1}</td>
                         <td>{element.name}</td>
                         <td>{element.price}</td>
                         <td>{element.raiting}</td>
                         <td><img width="150" src={element.image}></img></td>
                         </tr>
                     ))
                     }
                 </table>
             </React.Fragment>
         )
     }
 };
 export default Second;