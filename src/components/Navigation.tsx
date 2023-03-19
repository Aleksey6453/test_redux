import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='nav'>
      <Link to='/' className='link'> Airport </Link>
      <Link to='/auth' className='link'> Auth </Link>
    </nav>
  )
}

export default Navigation
