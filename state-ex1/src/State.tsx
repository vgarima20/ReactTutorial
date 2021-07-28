import React, {Component} from "react";
interface IState{
"sub":string
};
interface IProps{};
class State extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state={
            sub: "ReactJS"
        }
    }
    my_fun=()=>{
        this.setState({
            sub:"ReactJS with Typescript!!!"
        })
    };
    render(){
        return(
        <React.Fragment>
            <h1>{this.state.sub}</h1>
         <button onClick={this.my_fun}>Change</button>
        </React.Fragment>
        )
    }
};
export default State;
