import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
    <header className="Header">
      <div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="links">
          <ul>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Topics</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header