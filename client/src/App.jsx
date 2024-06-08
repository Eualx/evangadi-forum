import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Dashbord from './pages/Home/Dashbord'
import Register from './pages/SigInSignUp/Register'
// import Home from './pages/Home/Home'
import { useEffect, useState, createContext } from 'react'
import axios from './pages/Axios/axiosConfig'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import QuestionAns from './pages/QuestionAns/QuestionAns'
import Header from './pages/Header/Header'
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
  // if (token){
    checkUser()
  // }else
// navigate("/register");
},[])



  return (
    <AppState.Provider value={{user, setUser}}>
        <Header />
   <Routes>
  <Route path="/" element={<Dashbord/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/all-questions" element={<AskQuestion/>}/>
  <Route path="/:questionid" element={<QuestionAns/>}/>

   </Routes>


    </AppState.Provider>
  )
}

export default App
