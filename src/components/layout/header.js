import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Button } from 'reactstrap'
import logo from '../../images/logo-overresponse-white-small.png'
import styles from './header.module.scss'

const Header = ({ siteTitle }) => (
  <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-primary'>
    <Link to='/' className='navbar-brand'>
      <img alt='Overresponse Logo' src={logo} />
    </Link>
    <div className={`collapse navbar-collapse`} >
      <ul className={`navbar-nav mr-auto mt-2 mt-lg-0 ${styles.menu}`}>
        <li className='nav-item'>
          <Link to='/features' className='nav-link'>
            Documentation
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/samples' className='nav-link'>
            About
          </Link>
        </li>
      </ul>
      <form className={`form-inline`}>
        <ul className={`navbar-nav ${styles.menu}`}>
          <li className='nav-item'>
            <Link to='/features' className={`nav-link ${styles.loginButton}`}>
              Login
            </Link>
          </li>
        </ul>
        <Link to='/samples'>
          <Button color="light">Sign up</Button>
        </Link>
      </form>
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
