import React from 'react';

const Item = (props) => (
    <div className='result'>
            <h2>Title {props.post.title}</h2>
            <h3>Author {props.post.author}</h3>
            <h3>Created At {new Date(props.post.created_at).toDateString()}</h3>
            <p><a href='#'>Url {props.post.url}</a></p>
            <h3>Point {props.post.points}</h3>
    </div>
)


export default Item;
