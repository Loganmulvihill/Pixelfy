import React from 'react';
import '../css/App.css';
import Navbar from './Navbar';
import List from './List';
import ListDetails from './ListDetails';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      search: '',
      view: 'list',
      networkDelay: 1,
      id: '',
      detailImage: ''
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.networkDelayChange = this.networkDelayChange.bind(this);
    this.searchClick = this.searchClick.bind(this);
    this.delayedSearch = this.delayedSearch.bind(this);
    this.setView = this.setView.bind(this);
    this.setId = this.setId.bind(this);
    this.findImage = this.findImage.bind(this);
  }

  handleSearchChange(e) {
    e.preventDefault();
    this.setState({ search: e.target.value });
  }

  networkDelayChange(e) {
    e.preventDefault();
    this.setState({ networkDelay: e.target.value });
  }

  searchClick() {
    fetch(`https://pixabay.com/api/?key=18604417-bae5ac0ef8e7027218adc269a&q=${this.state.search}&safesearch=true&image_type=photo`)
      .then(response => response.json())
      .then(data => {
        this.setState({ images: data.hits })
      });
  }

  delayedSearch() {
    const delayAmount = this.state.networkDelay;
    this.setState({ images: [] })
    setTimeout(() => {
      this.searchClick()
    }, (delayAmount * 1000))
  }

  setView(newView) {
      this.setState({view:newView})
  }

  setId(i) {
    this.setState({id: i})
  }

  findImage(imageId) {
    for(let i = 0; i < this.state.images.length; i++) {
      if (this.state.images[i].id === imageId) {
        this.setState({detailImage:this.state.images[i]})
      }
    }
  }

  componentDidMount() {
    const initialPic = 'Sun';
    fetch(`https://pixabay.com/api/?key=18604417-bae5ac0ef8e7027218adc269a&q=${initialPic}&image_type=photo`)
      .then(response => response.json())
      .then(data => {
        this.setState({ images: data.hits })
      });
  }

  render() {

    if (this.state.view === 'list') {
      return (
        <div>
          <Navbar
            handleSearchChange={this.handleSearchChange}
            networkDelayChange={this.networkDelayChange}
            searchClick={this.searchClick}
            delayedSearch={this.delayedSearch}
          />
          <List images={this.state.images} setId={this.setId} setView={this.setView} findImage={this.findImage} />
        </div>
      );
    }
    if (this.state.view === 'details') {
      return (
        <div>
          <Navbar
            handleSearchChange={this.handleSearchChange}
            networkDelayChange={this.networkDelayChange}
            searchClick={this.searchClick}
            delayedSearch={this.delayedSearch}
          />
          <ListDetails detailImage={this.state.detailImage} setView={this.setView} />
        </div>
      )
    }
  }
}
