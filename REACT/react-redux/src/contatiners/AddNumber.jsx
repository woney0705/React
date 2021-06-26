import AddNumber from "../components/AddNumber";
import {connect} from 'react-redux';
function mapReduxDispatchToReactProps(dispatch){
    return {
        onClick2:function(size){
            dispatch({type:'INCREMENT', size:size});
        }
    }
}
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);

// import React, {Component} from "react";
// // 랩핑할 컴포넌트 불러옴

// import store from "../store";

// export default class extends Component{
//     render(){
//         return <AddNumber onClick={function(size){
//             store.dispatch({type:'INCREMENT', size:size});
//           }.bind(this)}></AddNumber>
//     }
// }