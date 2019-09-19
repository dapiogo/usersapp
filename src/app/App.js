import React, { Component } from 'react';
import List from '../components/List/List';
import SearchBar from '../components/SearchBar/SearchBar';
import Header from '../components/Header/Header';
import Loader from '../components/Loader/Loader';
import { API as baseUrl } from '../api';
import styles from './App.module.scss';


class App extends Component {

  state = {
    usersData:[],
    value:'',
    isLoading:true,
    error:null
  }

  handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();

    this.setState({ value });
  }

  filterData = (value) => this.state.usersData.filter(user => user.name.toLowerCase().indexOf(value) !== -1);

  fetchData = (APIpatch) => {
    fetch(baseUrl + APIpatch)
      .then(response => {
        if (response.ok) return response.json();
        throw Error(`Error ${response.status}: connection failed`);
      })
      .then(data => 
        setTimeout(() => {
          this.setState({
            usersData: data,
            isLoading: false
          })
        },1000)
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchData('users');
  }

  render() {
    const { value, isLoading } = this.state;
    const filteredUsersForText = this.filterData(value);
 
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Header/>
          <SearchBar value={value} searchFn={this.handleInputChange}/>
          {!isLoading ? <List users={filteredUsersForText}/> : <Loader/>}
        </div>
      </div>
    )
  }
}

export default App;
