import {Paper , Table , TableBody , TableContainer , TableHead , TableRow , TableCell , Avatar} from "@material-ui/core";
import { Typography } from "@material-ui/core";
import React, {Component} from "react";
interface IState{};
interface IProps{
    key1:string;
    key2:number;
    key3:any[];
    key4:any
};
class Third extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    } 
    render(){
        return(
            <React.Fragment>
                <Typography variant="h3" color="secondary">{this.props.key1}</Typography>
                <Typography variant="h3" color="secondary">{this.props.key2}</Typography>
                <Typography variant="h3" color="secondary">{this.props.key4}</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>SNO</TableCell>
                            <TableCell>NAME</TableCell>
                            <TableCell>BRAND</TableCell>
                            <TableCell>IMAGE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                           {this.props.key3.map((element,index)=>(
                             <TableRow key={index}>
                                 <TableCell>{index+1}</TableCell>
                                 <TableCell>{element.name}</TableCell>
                                 <TableCell>{element.brand}</TableCell>
                                 <TableCell><Avatar src={element.image}></Avatar></TableCell>
                             </TableRow> 
                           ))}

                    </TableBody>
                </Table>
            </TableContainer>
            
            </React.Fragment>
        )
    }
};
export default Third;