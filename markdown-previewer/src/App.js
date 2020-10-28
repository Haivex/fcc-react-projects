import React from 'react';
import './App.css';
import * as mark from 'marked';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.transformText = this.transformText.bind(this);

    this.state = {
      currentValue: '# Welcome to my React Markdown Previewer!\r\n\r\n## This is a sub-heading...\r\n### And here\'s some other cool stuff:\r\n  \r\nHeres some code, `<div><\/div>`, between 2 backticks.\r\n\r\n```\r\n\/\/ this is multi-line code:\r\n\r\nfunction anotherExample(firstLine, lastLine) {\r\n  if (firstLine == \'```\' && lastLine == \'```\') {\r\n    return multiLineCode;\r\n  }\r\n}\r\n```\r\n  \r\nYou can also make text **bold**... whoa!\r\nOr _italic_.\r\nOr... wait for it... **_both!_**\r\nAnd feel free to go crazy ~~crossing stuff out~~.\r\n\r\nThere\'s also [links](https:\/\/www.freecodecamp.com), and\r\n> Block Quotes!\r\n\r\nAnd if you want to get really crazy, even tables:\r\n\r\nWild Header | Crazy Header | Another Header?\r\n------------ | ------------- | ------------- \r\nYour content can | be here, and it | can be here....\r\nAnd here. | Okay. | I think we get it.\r\n\r\n- And of course there are lists.\r\n  - Some are bulleted.\r\n     - With different indentation levels.\r\n        - That look like this.\r\n\r\n\r\n1. And there are numbererd lists too.\r\n1. Use just 1s if you want! \r\n1. But the list goes on...\r\n- Even if you use dashes or asterisks.\r\n* And last but not least, let\'s not forget embedded images:\r\n\r\n![React Logo w\/ Text](https:\/\/goo.gl\/Umyytc)\r\n',
      markedText: ''
    }
  }

  componentDidMount() {
    this.setState({
      markedText: mark.parse(this.state.currentValue, {
        gfm: true,
        breaks: true
      }).toString()
    })
  }

  transformText(event) {
    this.setState({
      currentValue: event.target.value,
      markedText: mark.parse(event.target.value, {
        gfm: true,
        breaks: true
      }).toString()
    })
    console.log(this.state.markedText)
  }

  render() {
    return (
      <div>
        <textarea id="editor" value={this.state.currentValue} onChange={this.transformText}></textarea>
        <code id="preview" dangerouslySetInnerHTML={{__html: this.state.markedText}}></code>
      </div>
    );
  }
}

export default App;
