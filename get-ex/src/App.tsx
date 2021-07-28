import React, {Component} from "react";
import axios from "axios";
interface IState{
  data:any;
};
interface IProps{};
class App extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props);
    this.state={
      data : {}
    }
  };
componentDidMount(){
  axios.get("http://restcountries.eu/rest/v2/all").then((posRes)=>{
    this.setState({
      data: posRes
    })
  },(errRes)=>{})
}
render(){
  return(
    <React.Fragment>
      {JSON.stringify(this.state.data)}
    </React.Fragment>
  )
}
};
export default App;