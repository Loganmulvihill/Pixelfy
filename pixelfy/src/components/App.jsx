import React from 'react';
import '../css/App.css';
import Navbar from './Navbar';
import List from './List';

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

  componentDidMount () {
    fetch('https://pixabay.com/api/?key=18604417-bae5ac0ef8e7027218adc269a&q=yellow+flowers&image_type=photo')
      .then(response => response.json())
      .then(data =>  {
        this.setState({images: data.hits})});
  }
  render() {
    return (
      <div>
       <Navbar />
       <List />
      </div>
    );
  }
}
