import {useRef} from "react";
import Layout from "../Layout/Layout";
import { Link,useNavigate } from "react-router-dom";
import classes from "./Ask.module.css";
import axios from "../Axios/axiosConfig"

function AskQuestion() {
  const navigate=useNavigate()
  const titleDom=useRef()
  const descriptionDom=useRef()
  const token = localStorage.getItem("token")
  async function handleSubmit(e) {
    e.preventDefault();
    const titlevalue=titleDom.current.value;
    const descriptionvalue=descriptionDom.current.value

if(!titlevalue|| !descriptionvalue){
  alert("please provide all required information")
  return
}
    try {
     await axios.post("/questions/all-questions",{
     
      title:titlevalue,
      description:descriptionvalue,
      },
      { headers:{
        Authorization: 'Bearer ' + token,}
      }
 
    );
    
      
alert("you are redirecting to question page")
      navigate("/");
     
    } catch (error) {
      alert("something went wrong")
      console.log(error);
    }
  }

  return (
    <Layout>
      <section className={classes.AskQuestion_container}>
        <div className={classes.description}>
          <h3>Steps to write a good question</h3>
          <ul>
            <li>Summerize your problem in a one-line title</li>
            <li>Describe your problem in more detail</li>
            <li>Describe what you tried and what you expected to happen</li>
            <li>Review your question and post it to the site</li>
          </ul>
        </div>
        <div className={classes.form}>
          <form onSubmit={handleSubmit} action="">
            <div className={classes.public}>
              <h3>Ask a public question </h3>
              <Link to="">redirecting to all question page </Link>
            </div>

            <div className={classes.title}>
              <input 
              ref={titleDom}
              type="text" 
              placeholder="Title" />
            </div> <br />
            <div className={classes.Question_Des}>
              {" "}
              <input ref={descriptionDom}
              type="text" placeholder="Question Description" />
            </div>

            <button> Post The Question</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default AskQuestion;
