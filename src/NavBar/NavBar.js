import React, { Component } from 'react'
import './NavBar.css'

import SearchBar from './SearchBar/SearchBar.js'

import FaBars from 'react-icons/lib/fa/bars'

export default class NavBar extends Component {
  render () {
    return (
      <ul>
        <li><FaBars className='menu-button' /></li>
        <li className='search-input'><SearchBar /></li>
        <li><div className='userPic' /></li>
      </ul>
    )
  }
}
