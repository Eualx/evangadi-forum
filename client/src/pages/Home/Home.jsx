import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppState } from '../../App'
import Layout from '../Layout/Layout'
import clasess from './Home.module.css'
import { VscAccount } from "react-icons/vsc";
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom'
import axios from '../Axios/axiosConfig'
Link
function Home() {
  const {user} =useContext(AppState)
  const token = localStorage.getItem("token")

const [values, setValues]=useState([])
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

  return (
    <Layout>

    <div className={clasess.Home_container}>
      <div className={clasess.top_container}>
        <button type="submit"><Link to="/all-questions">Ask question</Link></button>
        <h3>welcome: {user.username}</h3>
      </div>
      <h4>Questions</h4>
      <hr />
      {values?.map((value, i) => (
        <div key={i} className={clasess.one_question}>
          <div className={clasess.username}>
            <VscAccount size={40} /><br />
           
            <p>{value.username}</p>
          </div>
          <div className={clasess.question}>
            <div>
              {value.title}
        
            </div>
            <div>
              <Link to={`/${value.questionid}`}><FaAngleRight /></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  ;


 
    </Layout>
  
     
  )
}

export default Home