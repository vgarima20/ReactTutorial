import axios from "axios";
import React, {Component} from "react";
import {TableContainer, Paper, Table , TableHead , TableBody , TableRow, TableCell , Avatar} from "@material-ui/core";
interface IState{
  res:any
};
interface IProps{};
class App extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props);
    this.state={
      res:[]
    }
  }
  componentDidMount(){
    axios.get("http://restcountries.eu/rest/v2/all").then((posRes)=>{
      this.setState({
        res : posRes.data
      })
    },(errRes)=>{
      console.log(errRes);
    })
  
};
render(){
  return(
    <React.Fragment>
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
      <TableRow>
        <TableCell>Sno</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Capital</TableCell>
        <TableCell>Region</TableCell>
        <TableCell>SubRegion</TableCell>
        <TableCell>Area</TableCell>
        <TableCell>NativeName</TableCell>
        <TableCell>Flags</TableCell>
      </TableRow>
      </TableHead>
        <TableBody>
         {this.state.res.map((element:any,index:any)=>(
           <TableRow>
             <TableCell>{index+1}</TableCell>
             <TableCell>{element.name}</TableCell>
             <TableCell>{element.capital}</TableCell>
             <TableCell>{element.region}</TableCell>
             <TableCell>{element.subregion}</TableCell>
             <TableCell>{element.area}</TableCell>
             <TableCell>{element.nativeName}</TableCell>
             <TableCell><Avatar src={element.flag}></Avatar></TableCell>
           </TableRow>
         ))}
        </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  )
}

};
export default App;

