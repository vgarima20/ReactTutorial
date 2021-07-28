import { Component } from "react";
interface Istate{};
interface Iprops{};
class Header extends Component<Iprops,Istate>{
    constructor(props:Iprops){
        super(props);
    };
    render(){
        return(
        <h1>E-Commerce Application Soon...</h1>
        )
    }
};
export default Header;