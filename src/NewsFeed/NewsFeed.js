import React, { Component } from 'react'

import './NewsFeed.css'

class NewsFeed extends Component {
  render () {
    return (
      <div className='news-feed'>
        <h2 className='news-main-title'>Notícias</h2>
        <ul className='news-container'>
          <li className='news'>
            <div className='news-img' />
            <h3 className='news-title'>Notícia 1</h3>
            <p className='news-text'>
              Notícia sobre o assunto
            </p>
          </li>
          <li className='news'>
            <div className='news-img' />
            <h3 className='news-title'>Notícia 1</h3>
            <p className='news-text'>
              Notícia sobre o assunto
            </p>
          </li>
          <li className='news'>
            <div className='news-img' />
            <h3 className='news-title'>Notícia 1</h3>
            <p className='news-text'>
              Notícia sobre o assunto
            </p>
          </li>
          <li className='news'>
            <div className='news-img' />
            <h3 className='news-title'>Notícia 1</h3>
            <p className='news-text'>
              Notícia sobre o assunto
            </p>
          </li>
        </ul>
      </div>
    )
  }
}

export default NewsFeed
