import React, { Component } from 'react'

import './NotificationButton.css'

import FaBell from 'react-icons/lib/fa/bell'

class NotificationButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 2
    }
  }

  render () {
    return (
      <div className='notification-button'>
        <FaBell />
        <span className='notification-counter'>{this.state.counter}</span>
      </div>
    )
  }
}

export default NotificationButton
