import React, { Component } from 'react';
import List from './components/List/List';
import SearchBar from './components/SearchBar/SearchBar';
import { API as baseUrl } from './api';
import './App.css';

class App extends Component {

  state = {
    usersData:[],
    value:'',
    searchData:[],
    isLoading:true,
    error:null
  }

  handleInputChange = (e) => {
    const search = e.target.value.toLowerCase();
    let searchData = [...this.state.usersData];
    if(search){
      searchData = searchData.filter(item => item.name.toLowerCase().indexOf(search) !== -1);
      console.log(searchData);
      this.setState({
        value:search,
        searchData:searchData
      })
    } else {
      console.log('e');
      this.setState({
        value:search,
        searchData:this.state.usersData
      })
    }
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
    return (
      <div>
      <SearchBar value={value} searchFn={this.handleInputChange}/>
      <List/>
      <ul>
      {this.state.searchData.map(el => <li>{el.name}</li>)}
      </ul>
      </div>
    )
  }
}
export default App;
