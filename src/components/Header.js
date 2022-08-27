import React from 'react'
import '../styles/header.css'
import logo from '../assets/images/karenic-logo.png'

export default function Header() {
  return (
    <div className='header'>
        <div className='logo-container'>
            <div className='image-container'>
                <img src={logo} alt='logo'/>
            </div>
            <h2 className='brand-name'>Karenic</h2>
        </div>

    </div>
  )
}
