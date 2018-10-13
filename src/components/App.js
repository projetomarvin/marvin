import React, { Component } from "react";
import AceEditor from "react-ace";
import safeEval from 'safe-eval';
import "../static/styles/main.css"
import "brace/mode/javascript";
import "brace/theme/monokai";
import "brace/theme/xcode";

class App extends Component {
  state = {
    value: "",
    theme: "monokai",
    consoleOutput: ""
  };

  onChange = newValue => {
    this.setState({
      value: newValue,
      consoleOutput: ""
    });
  };

  handleChangeTheme = event => {
    this.setState({ theme: event.target.value });
  };

  handleClick = () => {
    const { value } = this.state;
    // const ev =  safeEval(value)
    console.log(
      eval(value)
    );
  };

  render() {
    return (
      <div className="container">
        <div className="half">
        <select value={this.state.theme} onChange={this.handleChangeTheme}>
          <option value="monokai">Escuro</option>
          <option value="xcode">Claro</option>
        </select>
        <AceEditor
          mode="javascript"
          theme={this.state.theme}
          onChange={this.onChange}
          name="lololol"
          value={this.state.value}
          width=""
          height=""
          editorProps={{ $blockScrolling: true }}
          enableBasicAutocompletion={false}
          enableLiveAutocompletion={false}
          enableSnippets={false}
          setOptions={{
            behavioursEnabled: false,
            showLineNumbers: true,
            tabSize: 2
          }}
        />
        <button onClick={this.handleClick}>rodar</button>
      </div>
      <div className="half">
        <h1>output do console:</h1>
        <p>{this.state.consoleOutput}</p>
      </div>
      </div>
    );
  }
}

export default App;
