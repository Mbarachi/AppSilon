import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './top-nav.scss'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const TopNav = () => {
  const showSideMenu = () => {
    let ref = document.getElementsByClassName("side-nav")
    ref[0].style.display = "block"
  }
  return (
    <div className='top-nav'>
      <div id='hamburger'>
        <FontAwesomeIcon icon={faBars} size="lg" onClick={showSideMenu}/>
      </div>
      <div className="menu">
        <a>Overview</a>
        <a>Policy</a>
        <a id='active-item'>Reports</a>
      </div>
    </div>
  )
}

export default TopNav