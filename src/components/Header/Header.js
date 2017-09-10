import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
    <header className="Header">
      <div>
        <ul>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Topics</Link></li>
        </ul>

        <hr/>
      </div>
    </header>
  )
}

export default Header