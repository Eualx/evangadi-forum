import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppState } from '../../App'
import Layout from '../Layout/Layout'
import classes from './Home.module.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom'
import axios from '../Axios/axiosConfig'
import profile from "../../assets/img/icons8-user-profile-48.png"
import userprofile from '../../assets/img/user.png'
import team from '../../assets/img/team-spirit.png'

function Dashbord() {
  const {user} =useContext(AppState)
  const token = localStorage.getItem("token")

const [values, setValues]=useState([])
const [greeting, setGreeting]=useState(false)
useEffect(()=>{
axios.get('/data/combined',  { headers:{
  Authorization: 'Bearer ' + token,}
}
)

  .then((res)=>{
    setValues(res.data)
    console.log(res.data);
  })
   
.catch(
    (err)=>{
        console.log(err)
     
    })
    },[] )



    // useEffect(()=>{},[user])

  return (
    
    <Layout>

    <div className={classes.Home_container}>
      <div className={classes.top_container} onMouseLeave={() => setGreeting(false)}>
        <button type="submit"><Link to="/all-questions">Do yo have questions?</Link></button>
      <div onMouseOver={() => setGreeting(true)}    >
      <img  src={userprofile} width={60} alt="" />
      </div>  

      </div>


      { greeting && 
  <div className={classes.greet}><h2>Welcome: Dear {user.username}</h2>

<p> You are in the right place to ask any questions <br /> that confuse you or if you want to know more details</p>
 <img src={team} alt="" />


</div>
} 
      <br />
      <h3> The Latest Questions</h3>
      
      {values?.map((value, i) => (
        <div key={i} className={classes.one_question}>
          <div className={classes.button}>
       <Link to={`/${value.questionid}`}> <button >
        <div className={classes.button}>
            <div className={classes.profile}>
              <div>
          <img src={profile} width={100} alt="" />
          </div> 
            <div className={classes.username}>{value.username}</div> </div> 
            <div className={classes.title}><span className={classes.titleinside}>{value.title}</span> <span className={classes.arrow}><MdKeyboardArrowRight size={35}/> </span></div>
          
            </div>
       </button>
          </Link> 
       
          </div>
          
        
        </div>
      ))}
    </div>
  ;

  
 
    </Layout>
  
     
  )
}

export default Dashbord