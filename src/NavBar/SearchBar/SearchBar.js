import React, { Component } from 'react'
import './SearchBar.css'

import FaSearch from 'react-icons/lib/fa/search'

export default class SearchBar extends Component {
  render () {
    return (
      <div className='search-container'>
        <input
          title='Digite para pesquisar'
          placeholder='Digite para pesquisar'
          type='text'
        />
        <button
          title='Clique para realizar a busca'
        >
          <FaSearch />
        </button>
      </div>
    )
  }
}
