import React from 'react';
import '../css/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images:[],
      search:'',
      view:'list',
      networkDelay:1
    };

  }
  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}
