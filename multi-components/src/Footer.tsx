import { Component } from "react";
interface Istate{};
interface Iprops{};
class Footer extends Component<Iprops,Istate>{
    constructor(props:Iprops){
        super(props);
    }
    render(){
        return (
        <h5>Copyright@ashokiit.in</h5>
        )
    }
};
export default Footer;