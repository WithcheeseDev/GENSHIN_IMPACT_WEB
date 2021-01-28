import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, MenuItem, Image, Card } from 'semantic-ui-react'
import genshin_impact_logo from 'assets/genshin_impact_logo.png'
import genshin_impact_logo_2 from 'assets/genshin_impact_logo_2.png'
import 'sass/homepage.scss'

export default function homepage() {
  return (
    <div>
      <Menu>
        <MenuItem className='nav__item'>
          <Link to='/'>
            <Image className='nav__item' src={genshin_impact_logo} size='tiny'></Image>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className='nav__item__brand' to='/character'>
            Character
          </Link>
        </MenuItem>
      </Menu>
      <div className='header'>
        <div className='header__menu'>
          <Image src={genshin_impact_logo_2} />
          <p>CONTENTS</p>
        </div>
      </div>
    </div>
  )
}
