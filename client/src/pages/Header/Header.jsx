import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/10002.png'
import classes from "./Header.module.css"

function Header() {
  return (
    <div className={classes.header_container}>
        <div className={classes.logo}>
        <Link to=""><img src={logo} alt="" /></Link>
        </div>
        <div className={classes.right_container}>
        <div><Link to="/">Home</Link></div>
       <div>
       <Link to="">How it Works</Link>
       </div>
       <div><button type='button'>LogOut</button></div>
       
        </div>
        
        
    </div>
  )
}

export default Header