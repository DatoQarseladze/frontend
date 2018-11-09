import React, { Component } from 'react';
import Loader from './Components/Loader'
import Search from './Components/Search'
import List from './Components/List'
import './App.css';
import { ETIME } from 'constants';
const url = 'https://hn.algolia.com/api/v1/search?query='

class App extends Component {
  state = {
    query: 'css',
    url,
    data: null,
    isLoading: true,
  }

  componentDidMount(){
    fetch( `${url}${this.state.query}`)
    .then(data => data.json())
    .then( data =>{
      this.setState({data, isLoading: false});
      // console.log(this.state.data);
    })
    .catch(err => console.log(err));
  
  }
  componentDidUpdate(){
    fetch( `${url}${this.state.query}`)
    .then(data => data.json())
    .then( data =>{
      setTimeout(() => {
        this.setState({data, isLoading: false});
        console.log(data);
      }, 1500);
    })
    .catch(err => console.log(err));
  }
  // onSearchHandler = (e)  => {
  //   this.setState( {query: e.target.value })
  // }
  onSubmit = (e) => {
    e.preventDefault();
    const query = e.target.children.searchText.value;
    this.setState({query, isLoading: true})
  }

  render() {
    return (
      <div className="wrapper">
      <Search /* onSearchHandler={this.onSearchHandler} */ onSubmit={this.onSubmit}/>
 
      {this.state.isLoading && <Loader />}
      {!this.state.isLoading && <List data={this.state.data.hits} />}
      {/* <Loader /> */}
      </div>
    );
  }
}

export default App;
