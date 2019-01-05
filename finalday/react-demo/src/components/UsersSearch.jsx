import React, { Component } from 'react'
import UserData from '../db/users.json'


function searchingFor(term){
    return function(x){
        return x.username.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

export default class UsersSearch extends Component {
    constructor(props){
        super(props);
        this.state ={
            people: UserData,
            term: ''
        }

        this.searchHandler = this.searchHandler.bind(this);
    }
    searchHandler = (e) =>{
        let variable = e.target.value
        this.setState({term: variable })
    }
  render(){
    return (
        <div className='search'>
        <form action="">
        <input 
        type='text' 
        name='searchUsername' 
        onChange={this.searchHandler}
          />
        </form>
       
          {this.state.people.filter(searchingFor(this.state.term)).map(user => {
            return <h1 key={user.id}>{user.username}</h1>
          })}
         
        </div>
      )
  }

}
