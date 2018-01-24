import React, { Component } from 'react'
import './NavBar.css'

import NotificationButton from './Notifications/NotificationButton.js'
import SearchBar from './SearchBar/SearchBar.js'
import Menu from './Menu/Menu.js'

import FaBars from 'react-icons/lib/fa/bars'

export default class NavBar extends Component {
  constructor (props) {
    super(props)
    this.handleMenuToggle = this.handleMenuToggle.bind(this)
    this.state = {
      menu: false
    }
  }

  handleMenuToggle () {
    const currentState = this.state.menu
    this.setState({ menu: !currentState })
  }

  render () {
    return (
      <div className='navbar'>
        <ul className='navbar-menu'>
          <li className='menu-container'>
            <FaBars
              onClick={this.handleMenuToggle}
              className='menu-button' />
          </li>
          <li className='search-input'><SearchBar /></li>
          <li><NotificationButton /></li>
          <li><div className='user-pic' /></li>
        </ul>
        { this.state.menu ? <Menu /> : null }
      </div>
    )
  }
}
