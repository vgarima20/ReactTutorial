import React, { Component } from "react";
import Child from "./child";
interface IState{
    sub_one:string;
    sub_two:string;
    sub_three:string;
};
interface IProps{};
class Parent extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state={
            sub_one:"ReactJS",
            sub_two:"NodeJS",
            sub_three:"VueJS"
        }
    }
    my_fun = (arg1:any)=>{
        this.setState({
            sub_one : arg1.key1,
            sub_two : arg1.key2,
            sub_three : arg1.key3,
        })
    };
    render(){
        return(
            <React.Fragment>
                <h2>{this.state.sub_one}...{this.state.sub_two}...{this.state.sub_three}</h2>
                <Child key1={this.my_fun}></Child>
            </React.Fragment>
        )
    }
};
export default Parent;