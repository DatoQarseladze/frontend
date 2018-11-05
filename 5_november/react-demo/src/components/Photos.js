import React from 'react';

const Photos = (props) =>{
    const data = props.data.slice(0,props.length);
    return (
        <div>
        {
            data.map(photo => (
                <div key={photo.id}>
                    <h1>{photo.title}</h1> 
                </div>
            ))
        }
        </div>
    )
}

export default Photos