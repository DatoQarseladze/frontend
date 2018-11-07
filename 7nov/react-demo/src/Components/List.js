import React from 'react';
import Item from './Item'

const List = (props) => (
    <div className='results'>
    {props.data.map( (post, index) =>(
         <Item key={index}  post={post} />
    ))}
       
    </div>
)


export default List;
