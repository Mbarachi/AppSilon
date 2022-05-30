import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import MenuItem from '../menu-item/MenuItem'
import SideNavList from '../side-nav-list/SideNavList'
import './side-nav.scss'

const SideNav = () => {
  const hideSideMenu = () => {
    let ref = document.getElementsByClassName("side-nav-mobile")
    ref[0].style.display = "none"
  }
  return (
    <div className='side-nav side-nav-mobile'>
      <div className='company-name'>
        <img src="/images/logo.png" alt="" width='25px' />
        <b>Insurance Portal</b>
      </div>
      <div className="close-button" onClick={hideSideMenu}>
        <FontAwesomeIcon icon={faTimes} size="lg"/>
      </div>
      <div className='profile-section'>
          <div className='avatar'>
            <img src="/images/user-image.png" alt="" />
          </div>
        <b>Hello ! Rusalba Ruiz</b>
        <p>Welcome Back To Your Insurance Portal</p>
        <span>
          <label>Your Plan: </label>
          <label>Free</label>
        </span>
      </div>
      <div className='create-button'>
        <button>
          Create New Plan
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div>
        <SideNavList/>
      </div>
    </div>
  )
}

export default SideNav