import {useRef,useState,useEffect, useReducer} from 'react'
import classes from './QuestionAns.module.css'
import { Link, useParams} from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";
import Layout from '../Layout/Layout';
import axios from '../Axios/axiosConfig'
import QA from "../../assets/img/icons8-answer-58.png"

function QuestionAns({title, description}) {

  const answerDom=useRef()
  const token = localStorage.getItem("token")
  const {questionid}=useParams()
  const [values, setValues]=useState([])
  const [details, setDetail]=useState([])
  const [render,forceUpdate]=useReducer(x=>x+1)


  //
// const[author,setauthors]=useState([])


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
      },[questionid, token,render] )


      useEffect(()=>{
        // if (questionid && token) {
      axios.get(`/data/combineddetail/${questionid}`,  { headers:{
        Authorization: 'Bearer ' + token,}
    
       
      }
      )
      
        .then((res)=>{
          setDetail(res.data[0])
          console.log(res.data);
        })
         
      .catch(
          (err)=>{
              console.log(err)
           
          })
        // }
          },[] )
    
    



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
  forceUpdate()
  setTimeout(() => { window.location.reload();}, 3000)
    
alert("you are posting your answer")
  
  } catch (error) {
    alert("something went wrong")
    console.log(error);
  }
}


// const notMaps = values.filter(item => item.answers); 
// const Maps = values.filter(item => !item.answers);
// console.log(notMaps);
// console.log(Map);


  return (
  <Layout>
  
<div className={classes.answer_container}>
<div className={classes.title}>
<h4>Questions title:  <p>{details.title}</p></h4>
<h4>Questions description: {details.description}</h4>



      </div>

<h2><img src={QA} width={35} alt="" />Answer From The Community</h2>

<div className={classes.one_question}>
  <div className={classes.all_answer}>
{values.map((value, i) => (
 <div key={Map.id}>
  <div className={classes.username}> 
  <div>
      <VscAccount className={classes.icon} size={40}/><br />
      <p>{value.username}</p>
      </div>
      <div className={classes.answer}>{value.answer}</div>
      </div>
      </div>
      

    ))} 
    </div>
    <div className={classes.form}>
<form onSubmit={handleSubmit}  action="">
            <div className={classes.public}>
              <h3>Answer The Top Question </h3>
              <Link to="/all-questions">Go to question page</Link>
            </div>

            <div className={classes.newAnswer_Des}>
              {" "}
              <textarea ref={answerDom}  placeholder="Your Answer.." className={classes.textarea}></textarea>
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