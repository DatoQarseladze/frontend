import React, { Component } from 'react';


export default class User extends Component {
render(){
   return (
    <div className='User'>
 
      <ol className='Haha'>
          {this.props.arr.map(user => 
           <li className='hey' key={user.id}>
           {user.name} {user.id} {user.username} {user.email} {user.address.zipcode}
           </li>
          )}
      </ol> 
      
    </div>
  )
    }
    
  }

  
