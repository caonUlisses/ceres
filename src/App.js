import React, { Component } from 'react'
import './App.css'

import NavBar from './NavBar/NavBar.js'
import NewsFeed from './NewsFeed/NewsFeed.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavBar />
        <div className='content-container'>
          <NewsFeed />
        </div>
      </div>
    )
  }
}

export default App
