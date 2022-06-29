import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <>
      <NavLink  to='/'>
        <img src='./img/toga.png' alt='Tinder logo'
            className='logo'/>
      </NavLink>
      <NavLink className='navLink' to='/animeindex'>
        Check out some Waifu
      </NavLink>
      <NavLink className='navLink' to='/animenew'>
        Add a Waifu
      </NavLink>

      </>
      
    )
  }
}
