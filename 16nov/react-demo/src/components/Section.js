import React, { Component } from 'react';
import Icon from './Icon'

export default class Section extends Component {
  render() {
    return (
      <section>
        <div className="our-clients">
          Our Clients
            </div>

        <Icon class={'fab fa-react'} />

        <Icon class={'fab fa-firefox'} />
        <Icon class={'fab fa-js'} />


        <div className='view-all'>
          VIEW ALL
            </div>
      </section>

    )
  }
}