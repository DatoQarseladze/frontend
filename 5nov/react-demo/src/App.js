import React, { Component } from 'react';
import './App.css';
const FETCHURL = `https://jsonplaceholder.typicode.com/`

export default class App extends Component {
  constructor(props){
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    

  }
  state = {
    jsonData: null,
    loading: true,
    url :   'users',
  }
  componentDidMount(){
    fetch(FETCHURL + this.state.url) 
    .then(res => res.json())
    .then( users => this.setState({jsonData:users, loading: false}))
    .catch(err => console.log(err))
  }
  handleSearch(e){
    e.preventDefault();
    const result = this.textInput.value
    console.log(result);
    this.setState({url: result})
    this.render();
  }
  render() {
    if(this.state.loading){
      return <div>Loading....</div>
    }

    return (
      <div className="App">
      <div>
        <form onSubmit={this.handleSearch}>
          <input type='text' ref={(input) => this.textInput = input}  />
          <button>Search</button>
        </form>
      </div>
     { 
          this.state.loading ? <h3>Loading...</h3> : (
            <ol>
              { this.state.jsonData && this.state.jsonData.map( user => <li key={user.id}> {user.id} {user.name}</li>) }
            </ol>
          )
        }
      </div>
    );
  }
}


