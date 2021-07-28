import React, {Component} from "react";


interface IState{
  "key1" : string;
  "key2" : number;
  "key3" : boolean;
  "key4" : any;
  "key5" : any[];
};
interface IProps{

};
class App extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props);
    this.state={
      key1:"AshokIT",
      key2:17.2,
      key3:true,
      key4:{"sub_one":"ReactJS", "sub-two":"Angular","sub_three":"NodeJS"},
      key5:[{ "e_id": 111, "e_name": "e_one", "e_sal": 10000},
        {"e_id": 222, "e_name": "e_two", "e_sal": 20000},
        {"e_id": 333, "e_name": "e_three", "e_sal": 30000},
        {"e_id": 444, "e_name": "e_four", "e_sal": 40000},
        {"e_id": 555, "e_name": "e_five", "e_sal": 50000}]
    };
  };
  render(){
  return (
    <React.Fragment>
      <h1>{this.state.key1}</h1>
      <h1>{this.state.key2}</h1>
      <h1>{JSON.stringify(this.state.key3)}</h1>
      <h1>{JSON.stringify(this.state.key4)}</h1>
     <table style= {{border: "1px,solid"}}>
       <tr>
         <th>S.NO</th>
         <th>E_ID</th>
         <th>E_Name</th>
         <th>E_salary</th>
       </tr>
       {this.state.key5.map((element,index)=>(
         <tr key={index}>
           <td>{index}</td>
           <td>{element.e_id}</td>
           <td>{element.e_name}</td>
           <td>{element.e_sal}</td>
         </tr>
       ))}
     </table>
    </React.Fragment>
  )
  }
};
export default App;