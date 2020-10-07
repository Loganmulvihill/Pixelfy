import React from 'react';
import '../css/App.css';
import Navbar from './Navbar';
import Footer from './Footer';

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
       <Navbar />
       <Footer />
      </div>
    );
  }
}
