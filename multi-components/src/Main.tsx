import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
interface Istate{};
interface Iprops{};
class Main extends Component<Iprops,Istate>{
    constructor(props:Iprops){
        super(props);
    } 
    render(){
        return (
            <React.Fragment>
                <Header />
                <Body />
                <Footer />
            </React.Fragment>
        )
    }  
};
export default Main;