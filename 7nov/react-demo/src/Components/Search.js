import React from 'react';

export default class Search extends React.Component{


    render(){
        return(
            <div className="input">
            <form action="" method='GET'>
              <input type="text" placeholder='Search Text' />
              <button> Submit </button>
            </form>
          </div>
        );
    }
}