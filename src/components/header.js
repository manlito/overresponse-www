import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Button } from 'reactstrap'
import logo from '../images/logo-overresponse-white-small.png'

const Header = ({ siteTitle }) => (
  <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
    <Link to='/' className='navbar-brand'>
      <img alt='Overresponse Logo' src={logo} />
    </Link>
    <div class='collapse navbar-collapse' id='navbarTogglerDemo03'>
      <ul class='navbar-nav mr-auto mt-2 mt-lg-0'>
        <li className='nav-item active'>
          <Link to='/features' className='nav-link'>
            Features
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/samples' className='nav-link'>
            Samples
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: 'Overresponse'
}

export default Header
