import React, { Component } from 'react';
import User from './User';
import './App.css';
const FETCHURL = 'https://jsonplaceholder.typicode.com/users'

class App extends Component {
  state = {
    jsonData: null,
    loading: true
  }

  componentDidMount(){
    fetch(FETCHURL)
    .then(res => res.json())
    .then( users => this.setState({jsonData:users, loading: false}))
    .catch(err => console.log(err))
  }
  render() {
 
  const showList = false;
  const {users, loading} = this.state;
  if(loading){
    return <div>Loading....</div>
  }
  return (
    <div className='App'>
    <h2>Using Array.prototype.map()</h2>
    {
      showList && (
      <div>
          <ul>
            {persons.map(person => <li key={person.name}> {person.name} {person.age}</li>)}
          </ul>
      </div>
      )
    }
    
      <h1>Using Array.prototype.map()</h1>
      <ul>
        {persons
                .filter(person => person.isActive)
                .map(person=> <li key={person.name}>{person.name} {person.age}</li>)}
      </ul>
      <h2>FETCHURL data</h2>
        {this.state.jsonData === null ? null :     <User arr = {this.state.jsonData}/>}
    
    </div>
  )
  }
}


export default App;
{/* <ul>
{this.state.jsonData === null ? null : this.state.jsonData.map(user => <li key={user.id}> {user.name}</li>)}
</ul> */}