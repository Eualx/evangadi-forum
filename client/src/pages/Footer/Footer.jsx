import React from 'react'
import classes from './Footer.module.css'
import logo2 from '../../assets/img/10003.png'
import { Link } from 'react-router-dom'
import { FiFacebook } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { CiYoutube } from "react-icons/ci";
function Footer() {
  return (
    <section className={classes.footer}>
    <div className={classes.footer_container}>
        <div>
        <div className={classes.logo}>
        <Link to=""><img src={logo2} alt="" /></Link>
        </div>
        <div className={classes.icon}>
            <Link to=""><FiFacebook /></Link>
            <Link to=""><GrInstagram /></Link>
            <Link to=""><CiYoutube /></Link>
        </div>
      
        </div>
        <div>
        <h3>Useful Link</h3>
        <p>How it works</p>
        <p>Terms of Service</p>
        <p>Privacy policy</p>
       </div>
       <div>
        <h3> Contact Info</h3>
        <p>Evangadi Networks</p>
        <p>support@evangadi.com</p>
        <p>+1-202-386-2702</p>
       </div>

    </div>
    </section>
  )
}

export default Footer