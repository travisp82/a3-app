import React, { Component } from 'react';
import {CardList} from './component/card-list/card-list.component';
import {SearchBox} from './component/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      foodbanks: [],
      searchField: ''
    };
  }

//fetch
componentDidMount(){
  fetch('https://www.givefood.org.uk/api/2/foodbanks/')
  .then(response => response.json())
  .then(users => this.setState({foodbanks: users}));
}

handleChange = e => {
  this.setState({searchField: e.target.value});
}

  //render
  render(){
    const { foodbanks, searchField } = this.state;
    //filter by name OR country
    const filteredFoodbanks = foodbanks.filter(foodbanks =>
       foodbanks.name.toLowerCase().includes(searchField.toLowerCase()) || foodbanks.country.toLowerCase().includes(searchField.toLowerCase()) || foodbanks.email.toLowerCase().includes(searchField.toLowerCase()) )
    return(

      <div className="App">
        <SearchBox
          placeholder='Locate Foodbank by name, country or email...'
          handleChange = {e => this.setState({ searchField: e.target.value})}
          />
        <CardList foodbanks={filteredFoodbanks} />
      </div>
    )
  }
}




export default App;
