const React = require("react");
const {Component} = React;

class GuGuDan extends Component {
    constructor(props){
        super(props);
        this.state = {
            leftNum : Math.ceil(Math.random()*9),
            rightNum: Math.ceil(Math.random()*9),
            inputValue: '',
            resultValue: '',
            resultValxue: '',
        }
    }

    onSubmit = (e)=>{
                        e.preventDefault();
                        if((this.state.leftNum*this.state.rightNum)===Number(this.state.inputValue)){
                            //비동기 방식이다
                            this.setState((prevState) => {
                                return {
                                    resultValue: prevState.leftNum +" * " + prevState.rightNum + " = " + (prevState.leftNum*prevState.rightNum) + " 정답!",
                                    leftNum : Math.ceil(Math.random()*9),
                                    rightNum: Math.ceil(Math.random()*9),
                                    inputValue: ''
                                };
                            })

                        } else {
                            this.setState({resultValue:"땡",
                            inputValue: ''})

                            
                        }
                        this.input.focus();
                    };

                    onChange = (e) => {this.setState({inputValue : e.target.value})};
    
    input; 

    onRefInput = (c) => {this.input = c}
    //setState를 할때마다 랜더를 실행한다
    render(){
        return (
            <div>
                <div>{this.state.leftNum}곱하기 {this.state.rightNum}는?</div>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.onRefInput} type="number" value={this.state.inputValue} onChange={this.onChange}></input>
                    <button>입력</button>
                </form>
                <div>{this.state.resultValue}</div>
            </div>
            );
    }
}

module.exports = GuGuDan;