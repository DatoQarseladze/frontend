import React, { Component } from 'react';
import './App.css';
import{api as API} from './configs/api'
import Photos from './components/Photos'
import Users from './components/Users'
const url = API.baseUrl + API.photos

class App extends Component {
  state = {
    data : null,
  }
  componentDidMount(){
    console.log('dsad')
    fetch(url)
    .then( data => data.json())
    .then(data => this.setState({data}))
    .catch(err => console.log(err));
  }
   
  
  render() {
    return (
      <div className="App">
     {
       (!!this.state.data && url.endsWith(API.users) && <Users length={7} data={this.state.data}  />)
     }
      {
       (!!this.state.data && url.endsWith(API.photos) && <Photos length={7} data={this.state.data}  />)
     }
      </div>
    );
  }
}

export default App;
