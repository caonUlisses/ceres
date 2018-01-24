import React, { Component } from 'react'

import './Menu.css'

import { FaComment, FaHome, FaUser, FaBuilding, FaPaperclip } from 'react-icons/lib/fa/'

class Menu extends Component {
  render () {
    return (
      <div className='menu'>
        <ul className='menu-list'>
          <li className='item'>
            <FaHome className='item-icon' />
            <span className='item-title'>Início</span>
          </li>
          <li className='item'>
            <FaUser className='item-icon' />
            <span className='item-title'>Filiados</span>
          </li>
          <li className='item'>
            <FaBuilding className='item-icon' />
            <span className='item-title'>Parceiros</span>
          </li>
          <li className='item'>
            <FaPaperclip className='item-icon' />
            <span className='item-title'>Relatórios</span>
          </li>
          <li className='item'>
            <FaComment className='item-icon' />
            <span className='item-title'>Mensagens</span>
          </li>
        </ul>
      </div>
    )
  }
 }

export default Menu
