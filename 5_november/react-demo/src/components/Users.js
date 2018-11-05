import React from 'react';

const Users = (props) =>{
    const data = props.data.slice(0,props.length);
    return (
        <div>
        {
            data.map(user => (
                <div key={user.id}>
                    <h1>{user.name} {user.id} </h1> 
                </div>
            ))
        }
        </div>
    )
}

export default Users