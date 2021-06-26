import DisplayNumber from "../components/DisplayNumber";
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        number : state.number
    }
}

export default connect(mapReduxStateToReactProps)(DisplayNumber);

// import React, {Component} from "react";
// import store from '../store'
// export default class extends Component {
//     state = {number:store.getState().number};
//     constructor(props){
//         super(props);
//         store.subscribe(function(){
//             this.setState({number:store.getState().number});
//         }.bind(this))
        
//     }

//     //constructor 에서 setState를 쓰면 
//     // Warning: Can't call setState on a component that is not yet mounted
//     //  경고가 뜸 
//     // 아래 함수 쓰면 경고 가 사라짐
//     // componentWillMount 는 컴포넌트가 화면에 나타나기 직전에 호출되는 api 이다
//     componentWillMount(){
//         store.subscribe(function(){
//             this.setState({number:store.getState().number});
//         }.bind(this))
//     }
//     render(){
//         return <DisplayNumber number={this.state.number} unit={this.props.unit}> </DisplayNumber>
//     }
// }