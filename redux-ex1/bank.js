 const{createStore} = require("redux");
const initailState ={
    bal:10000
};
const reducer =(state=initailState,action)=>{
switch(action.type)
{
    case "deposit" : return{
        bal: state.bal + action.payload
    }
    case "withdraw" : return{
        bal: state.bal - action.payload
    }
    default :
    return state;
}};
const store = createStore(reducer);
store.subscribe(()=>{
    console.log(store.getState());
}

);
store.dispatch({type:"withdraw",payload:1000});
store.dispatch({type:"deposit",payload:5000});
store.dispatch({type:"withdraw",payload:2000});
store.dispatch({type:"deposit",payload:10000});