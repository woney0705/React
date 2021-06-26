import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setclassShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello World</h1>
      <input
        type="button"
        value="remove func"
        onClick={function () {
          setFuncShow(false);
        }}
      ></input>
      <input
        type="button"
        value="remove class"
        onClick={function () {
          setclassShow(false);
        }}
      ></input>
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}

var funcStyle = "color:blue";
var funcId = 0;
function FuncComp(props) {
  var numberState = useState(props.initNumber);
  var number = numberState[0];
  var setNumber = numberState[1];

  var newDate = useState(new Date().toString());

  var [_date, setDate] = useState(new Date().toString());

  useEffect(function () {
    console.log(
      "%cfunc => useEffect number (componentDidMount)" + ++funcId,
      funcStyle
    );
    document.title = number;

    return function () {
      console.log(
        "%cfunc => useEffect return (componentWillUnMount)" + ++funcId,
        funcStyle
      );
    };
  }, []);

  useEffect(
    function () {
      console.log(
        "%cfunc => useEffect number (componentDidMount & componentDidUpdate)" +
          ++funcId,
        funcStyle
      );
      document.title = number;

      // return function () {
      //   console.log("%cfunc => useEffect return" + ++funcId, funcStyle);
      // };
    },
    [number]
  );

  useEffect(
    function () {
      console.log(
        "%cfunc => useEffect date (componentDidMount & componentDidUpdate)" +
          ++funcId,
        funcStyle
      );
      document.title = _date;

      // return function () {
      //   console.log("%cfunc => useEffect return" + ++funcId, funcStyle);
      // };
    },
    [newDate[0]]
  );
  console.log("%cfunc => render" + ++funcId, funcStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {newDate[0]}</p>
      <input
        type="button"
        value="random"
        onClick={function () {
          setNumber(Math.random());
        }}
      ></input>
      <input
        type="button"
        value="date"
        onClick={function () {
          newDate[1](new Date().toString());
        }}
      ></input>
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };

  componentWillMount() {
    console.log("%cclass => componentWillMount", "color:red");
  }
  componentDidMount() {
    console.log("%cclass => componentDidMount", "color:red");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("%cclass => shouldComponentUpdate", "color:red");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("%cclass => componentWillUpdate", "color:red");
  }

  componentDidUpdate(nextProps, nextState) {
    console.log("%cclass => componentDidUpdate", "color:red");
  }

  componentWillUnmount() {
    console.log("%cclass => componentWillUnmount", "color:red");
  }
  render() {
    console.log("%cclass => render", "color:red");
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            this.setState({ number: Math.random() });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

export default App;
