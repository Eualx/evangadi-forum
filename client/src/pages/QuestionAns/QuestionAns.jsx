import {useRef,useState,useEffect} from 'react'
import classes from './QuestionAns.module.css'
import { Link, useParams} from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";
import Layout from '../Layout/Layout';
import axios from '../Axios/axiosConfig'
function QuestionAns() {

  const answerDom=useRef()
  const token = localStorage.getItem("token")
  const {questionid}=useParams()

  const [values, setValues]=useState([])
  useEffect(()=>{
    if (questionid && token) {
  axios.get(`/data/combined/${questionid}`,  { headers:{
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
    }
      },[questionid, token] )


async function handleSubmit(e) {
  e.preventDefault();
  const answervalue=answerDom.current.value;
 
  console.log("Question ID:", questionid); 
if(!answervalue){
alert("please provide all required information")
return
}
  try {
   await axios.post(`/answers/all-answer/${questionid}`,{
     
    answer:answervalue,
    questionid: questionid
 
    },
    { headers:{
      Authorization: 'Bearer ' + token,}
    }

  );
  
    
alert("you are posting your answer")
  
  } catch (error) {
    alert("something went wrong")
    console.log(error);
  }
}





  return (
  <Layout>
  
<div className={classes.answer_container}>
<h4>Questions</h4>
<div className={classes.one_question}>
{values?.map((value, i) => (
 <div>
  

<p>{value.title}</p>
<p>{value.description}</p>
<h3>Answer From The Community</h3>
    

  <div className={classes.username}> 
  <div>
      <VscAccount size={40}/><br />
      <p>{value.username}</p>
      </div>
      <div>{value.answer}</div>
      </div>
      </div>

    ))} 
    <div className={classes.form}>
<form onSubmit={handleSubmit}  action="">
            <div className={classes.public}>
              <h3>Answer The Top Question </h3>
              <Link to="/all-questions">Go to question page</Link>
            </div>

            <div className={classes.newAnswer_Des}>
              {" "}
              <input ref={answerDom} type="text" placeholder="Your Answer.." />
            </div>

            <button> Post your Answer</button>
          </form>
          </div>

          </div>
        
         </div>
    </Layout>
  )
}

export default QuestionAns