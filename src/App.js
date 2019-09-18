import React, { Component } from 'react';
import List from './components/List/List';
import SearchBar from './components/SearchBar/SearchBar';
import { API as baseUrl } from './api';
import './App.css';

class App extends Component {

  state = {
    usersData:[],
    value:'',
    isLoading:true,
    error:null
  }

  handleInputChange = (e) => {
    const search = e.target.value.toLowerCase();

      this.setState({
        value:search
      })
    }
  

  fetchData = (APIpatch) => {
    fetch(baseUrl + APIpatch)
      .then(response => {
        if (response.ok) return response.json();
        throw Error(`Error ${response.status}: connection failed`);
      })
      .then(data => {
        this.setState({
          usersData: data,
          isLoading: false
        })
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchData('users');
  }

  render() {
    const {value} = this.state;
    const func = this.state.usersData.filter(el => el.name.toLowerCase().indexOf(value) !== -1).map(el => <li>{el.name}</li>)
    console.log(func);
    return (
      <div>
      <SearchBar value={value} searchFn={this.handleInputChange}/>
      <List/>
      <ul>
      {func.length ? func : 'brak wynikow'}
      </ul>
      </div>
    )
  }
}
export default App;
