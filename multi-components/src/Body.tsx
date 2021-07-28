import React, { Component } from "react";
interface Istate{};
interface Iprops{};
class Body extends Component<Iprops,Istate>{
    constructor(props:Iprops){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
            <h2>Shirts</h2>
            <h2>Pants</h2>
            <h2>Kidswear</h2>
            <h2>Women</h2>
            </React.Fragment>  
        )
    }
};
export default Body;