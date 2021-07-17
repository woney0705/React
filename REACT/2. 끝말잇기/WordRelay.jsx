const React = require('react'); 
const {Component} = React;  // 필요로하는 패키지  를 가져오는것이고

class WordRelay extends Component {
    state = {
        word : "레이",
        value: "",
        result: ""
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.word[this.state.word.length - 1] === this.state.value[0]){
            this.setState({
                word: this.state.value,
                value: "",
                result: "정답"
            })
        } else {
            this.setState({
                value: "",
                result: "땡!!!!!!!!!!!!!!"
            })
        }
        
        this.input.focus();

    };

    onChangeInput = (e) =>{
        this.setState({ 
            value: e.target.value,
        })
    };

    onRefInput = (c) => {
        this.input = c;
    };
    render() {
        return  (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm} >
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} ></input>
                    <button>입력!!</button>

                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

module.exports = WordRelay;   //  컴포넌트 밖에서 가져가서 사용할수있게해주는것

//파일을 쪼개는경우 1,2 ,16  정의해줘야한다

