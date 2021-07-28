import React, { Component } from "react";
import Second from "./Second";
interface IState{
    key1: string;
    key2:number;
    key3:any[]
};
interface IProps{};
class First extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
      this.state={ 
        key1: "ReactJS",
        key2: 17.2,
        key3:      [
                     {"name":"Shirt","brand":"Niki","image":"https://images.unsplash.com/photo-1512353087810-25dfcd100962?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},
                     {"name":"Pants","brand":"Peter England","image":"https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPUS-PEPPER-MAASHA322624D9D2334E/1562934257812_0..jpg?imwidth=320&impolicy=hq"},
                     {"name":"Polo Shirt","brand":"Mufti","image":"https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPUS-PEPPER-MAASHA322624D9D2334E/1562934257812_0..jpg?imwidth=320&impolicy=hq"},
                     {"name":"Trousers","brand":"Van Huesen","image":"https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPUS-PEPPER-MAASHA322624D9D2334E/1562934257812_0..jpg?imwidth=320&impolicy=hq"},
                     {"name":"T-shirts","brand":"Indian Terrain","image":"https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPUS-PEPPER-MAASHA322624D9D2334E/1562934257812_0..jpg?imwidth=320&impolicy=hq"}
             ]
         }
};
render(){
    return(
        <React.Fragment>
           <Second  key1= {this.state.key1}
            key2={this.state.key2}
            key3={this.state.key3}>React with Typescript
           </Second>
        </React.Fragment>
    )
}
};
export default First;