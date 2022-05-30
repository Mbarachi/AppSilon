import React from 'react'
import './menu-item.scss'

const MenuItem = ({title, icon}) => {
  return (
    <div className='menu-item'>
      {icon}
      <p>{title}</p>
    </div>
  )
}

export default MenuItem