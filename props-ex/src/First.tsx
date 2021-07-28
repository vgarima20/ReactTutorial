import React, {Component} from "react";
import Second from "./Second";
interface IState{
    key1:string,
    key2:number,
    key3:any[]
};
interface IProps{};
 class First extends Component<IProps,IState>{
     constructor(props:IProps){
         super(props);
         this.state ={
             key1: "ReactJS",
             key2: 17.2,
             key3: [
                     {"name":"Shirt","price":100,"raiting":2.5,"image":"https://images.unsplash.com/photo-1512353087810-25dfcd100962?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},
                     {"name":"Polo Shirt","price":200,"raiting":3.5,"image":"https://images.unsplash.com/photo-1609655106619-9d28f4f79c49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9sbyUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
                     {"name":"Pants","price":300,"raiting":1.5,"image":"https://images.unsplash.com/photo-1584865288642-42078afe6942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGFudHMlMjBmb3IlMjBtZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
                     {"name":"trousers","price":400,"raiting":1.5,"image":"https://images.unsplash.com/photo-1492447166138-50c3889fccb1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJvdXNlcnNmb3IlMjBtZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
                     {"name":"T-shirts","price":500,"raiting":5.5,"image":"https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0cyUyMGZvciUyMG1lbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
             ]
         }
     };
     render(){
         return(
            <React.Fragment>
                 <Second key1={this.state.key1}
                 key2={this.state.key2}
                 key3={this.state.key3}></Second>
             </React.Fragment>
         )
     }
 };
 export default First;