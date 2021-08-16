const React = require('react'); 
const {Component} = React;  // 필요로하는 패키지  를 가져오는것이고

class WordRelay extends Component {
    state = {
        text: 'Hello, webpack',
    };

    render() {
        return <h1>{this.state.text}</h1>;
    }
}

module.exports = WordRelay;   //  컴포넌트 밖에서 가져가서 사용할수있게해주는것

//파일을 쪼개는경우 1,2 ,16  정의해줘야한다

