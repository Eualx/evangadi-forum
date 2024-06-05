import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Register from './pages/SigInSignUp/Register'
import { useEffect, useState, createContext } from 'react'
import axios from './pages/Axios/axiosConfig'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import QuestionAns from './pages/QuestionAns/QuestionAns'

export const AppState=createContext()


function App() {
  const [user , setUser]=useState({})
 const token = localStorage.getItem("token")
 const navigate=useNavigate()
 async function checkUser(){
    try {
     const {data} = await axios.get("/users/check",{ headers:{
        Authorization: 'Bearer ' + token,},})
        // console.log(data);
      setUser(data)
    } catch (error) {
      console.log(error.response);
      navigate("/register")
      
    }
  }
useEffect(()=>{
checkUser();
},[])
  return (
    <AppState.Provider value={{user, setUser}}>
   <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/all-questions" element={<AskQuestion/>}/>
  <Route path="/:questionid" element={<QuestionAns/>}/>
   </Routes>


    </AppState.Provider>
  )
}

export default App
