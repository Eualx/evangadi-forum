import React, { useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axiosConfig";
import classes from './Login.module.css'
import { FaEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import Layout from "../Layout/Layout";


function Login() {
  const navigate = useNavigate();
  const emailDom = useRef();
  const passwordDom = useRef();
  const [visible,setVisible]=useState(false)
  const handleVisblity =()=>{
    setVisible(!visible)
  }
  async function handleSubmit(e) {
    e.preventDefault();

    const emailvalue = emailDom.current.value;
    const passwordvalue = passwordDom.current.value;
    if (!emailvalue || !passwordvalue) {
      alert("please provide all required information");
      return;
    }

    try {
    const {data}=  await axios.post("/users/login", {
        email: emailvalue,
        password: passwordvalue,
      });
      alert("login sucessfully.");
      localStorage.setItem("token", data.token)
      console.log(data);
      navigate("/");
    } catch (error) {
      alert(error?.response?.data?.msg);
      console.log(error.response.data);
    }
  }

  return (
    <Layout>
    <section className={classes.Login_container}>
      <div className={classes.left_Login_container}>
        
    
      <form onSubmit={handleSubmit} action="">
        <h4>Login to your account</h4>
        <p>Don't have an account? <span><Link to={"/register"}>Create a new account</Link></span></p>

        <div>
        
          <input ref={emailDom} type="email" placeholder="Your Email" />
        </div>
        <br />
        <div>
        
          <input ref={passwordDom} type={(!visible)?"password":"text"} placeholder="Your Password " />
          <label  htmlFor=""> { (!visible)? (<FaRegEyeSlash onClick={handleVisblity}/>):(<FaEye onClick={handleVisblity}/>)
          }
          </label>
        </div>
        <button type="submit">Submit</button>
        <br />
        <Link to={"/register"}> Create an account?</Link>
       
      </form>
    
      </div>
      <div className={classes.right_Login_container}>
        <h5>About</h5>
        <h1>Evangadi Network Q&A </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, magna at malesuada placerat, massa lorem pretium turpis, eget pretium massa nunc quis dolor. Phasellus tempus, nisl a tristique rhoncus.</p><br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, magna at malesuada placerat, massa lorem pretium turpis, eget pretium massa nunc quis dolor. </p><br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, magna at malesuada placerat, massa lorem pretium turpis, eget pretium massa nunc quis dolor. Phasellus tempus, nisl a tristique rhoncus, nisi nibh tempus lorem, ut auctor ex diam mattis erat.  </p>
        <button>HOW IT WORKS</button>
      </div>
    </section>
    </Layout>
  );
}

export default Login;
