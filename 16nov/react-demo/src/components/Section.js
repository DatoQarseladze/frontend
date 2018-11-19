import React, { Component } from 'react';
import Icon from './Icon'

export default class Section extends Component {
  render() {
    return (
      <section>
        <div className='section-div'>
        <div className="our-clients">
          Our Clients
          </div>
        <div className='section-icons'>
        <Icon class={'fab fa-react'} />

        <Icon class={'fab fa-firefox'} />
        <Icon class={'fab fa-js'} />
        </div>

        <div className='view-all'>
          VIEW ALL
        </div>
        </div>
      </section>

    )
  }
}