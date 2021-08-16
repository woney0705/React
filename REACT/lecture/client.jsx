const React = require('react');
const ReactDom = require('react-dom');
const {Component} = React;
const WordRelay  = require('./WordRelay');

//파일을 많을때 사용할 파일만 추가하여 사용 할수있다 
ReactDom.render(<WordRelay />,document.querySelector('#root'));