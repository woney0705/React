import React, { Component } from "react";
import "./App.css";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "welcome",
      selected_content_id: 1,
      subject: { title: "WEB", sub: "world wide web!" },
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      content: { title: "HTML", desc: "HTML is HyperText Markup Language" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText ..." },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }
  getReadContent() {}
  getContent() {
    var _title,
      _desc,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      debugger;
      if (this.state.contents.length > 0) {
        _title =
          this.state.contents[Number(this.state.selected_content_id) - 1].title;
        _desc =
          this.state.contents[Number(this.state.selected_content_id) - 1].desc;
      } else {
        _title = "";
        _desc = "";
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            var _contents = Array.from(this.state.contents);
            _contents.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });

            this.setState({
              contents: _contents,
              mode: "read",
              selected_content_id: this.max_content_id,
            });
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === "update") {
      var _content =
        this.state.contents[Number(this.state.selected_content_id) - 1];
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            var _contents = Array.from(this.state.contents);
            _contents[_id - 1].title = _title;
            _contents[_id - 1].desc = _desc;
            this.setState({
              contents: _contents,
              mode: "read",
            });
          }.bind(this)}
        ></UpdateContent>
      );
    }

    return _article;
  }
  render() {
    console.log("App render");
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            if (this.state.mode === "read") {
              this.setState({ mode: "welcome" });
            } else if (this.state.mode === "welcome") {
              this.setState({ mode: "read" });
            }
          }.bind(this)}
        ></Subject>
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: id,
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Control
          onChangeMode={function (_mode) {
            if (_mode === "delete") {
              if (window.confirm("really?")) {
                var _contents = Array.from(this.state.contents);
                _contents.splice(this.state.selected_content_id - 1, 1);

                this.setState({
                  contents: _contents,
                  mode: "welcome",
                  selected_content_id: 1,
                });

                alert("deleted!");
              }
            } else {
              this.setState({
                mode: _mode,
              });
            }
          }.bind(this)}
        ></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
