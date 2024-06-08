
import { useRef , useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../Axios/axiosConfig";
// import classes from './Register.module.css'
import { FaEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import Layout from "../Layout/Layout";
import classes from './Register.module.css'
function Register() {

const [error, setError]=useState("")


  const navigate = useNavigate();


  const usernameDom = useRef();
  const firstnameDom = useRef();
  const lastnameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();

  const [visible,setVisible]=useState(false)
  const handleVisblity =()=>{
    setVisible(!visible)
  }
const [register, setRegister]=useState(true)

const registerpage=()=>{
  setRegister(!register)
}
  async function handleSubmit(e) {
    e.preventDefault();

    setError("")

    const usernamevalue = usernameDom.current.value;
    const firstnamevalue = firstnameDom.current.value;
    const lastnamevalue = lastnameDom.current.value;
    const emailvalue = emailDom.current.value;
    const passwordvalue = passwordDom.current.value;
    if (
      !usernamevalue ||
      !firstnamevalue ||
      !lastnamevalue ||
      !emailvalue ||
      !passwordvalue
    ) {
      setError("please provide all required information");
      return;
    }

    try {
      await axios.post("/users/register", {
        username: usernamevalue,
        firstname: firstnamevalue,
        lastname: lastnamevalue,
        email: emailvalue,
        password: passwordvalue,
      });
      alert("registerd successfully. please login");
     
      setRegister(!register)
    } catch (error) {
      // alert("something went wrong");
   
      console.log(error.response);
    }
  }

  async function handleSubmit2(e) {
    e.preventDefault();
setError("")
    const emailvalue = emailDom.current.value;
    const passwordvalue = passwordDom.current.value;
    if (!emailvalue || !passwordvalue) {
      setError("please provide the required information");
      return;
    }

    try {
    const {data}=  await axios.post("/users/login", {
        email: emailvalue,
        password: passwordvalue,
      });
      // alert("login sucessfully.");
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
    <section className={classes.Loginsign}>
    <div className={classes.Signup_container}>
      {register ?  (<div className={classes.left_Login_container}>
        
    
        <form onSubmit={handleSubmit2} action="">

        {error && <small>{error}</small>}
          <h4>Login to your account</h4>
          <p>Don't have an account? <span><Link  onClick={registerpage} to="">Create a new account</Link></span></p>
  
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
          <Link onClick={registerpage} to=""> Create an account?</Link>
         
        </form>
      
        </div> ):(
    <div className={classes.left_Signup_container}>
      <form onSubmit={handleSubmit} action="">
      <h4>Join the network</h4>
        <p>Already have an account?  <span><Link onClick={registerpage}>signin</Link></span></p>

      <p></p>
      <div>
         
         <input ref={emailDom} type="email" placeholder="Email" />
       </div>  <br />
      <div className={classes.first_last_name}>
        <div>
       
          <input ref={firstnameDom} type="text" placeholder="First Name" />
        </div>
        <br />
        <div>
        
          <input ref={lastnameDom} type="text" placeholder="Last Name" />
        </div>
        </div>
        <br />
        <div>
          
          <input ref={usernameDom} type="text" placeholder="User Name" />
        </div>
        
        <br />
        <div>
         
          <input ref={passwordDom} type={(!visible)?"password":"text"} placeholder="Password " />
          <label  htmlFor=""> { (!visible)? (<FaRegEyeSlash onClick={handleVisblity}/>):(<FaEye onClick={handleVisblity}/>)
          }</label>
        </div>
        <button type="submit">Agree and Join</button><br />
        {error && <small style={{color:"red"}}>{error}</small>} <br />
        I agree to the <span><a href="">Privacy policy</a> and <a href="">terms of serivice</a></span><br /><br />
        <Link onClick={registerpage} to="">Already have an account?</Link>
      </form>
      </div>)

     }
      <div className={classes.right_Signup_container}>
        <h5>About</h5>
        <h1>Evangadi Network Q&A </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, magna at malesuada placerat, massa lorem pretium turpis, eget pretium massa nunc quis dolor. Phasellus tempus, nisl a tristique rhoncus.</p><br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, magna at malesuada placerat, massa lorem pretium turpis, eget pretium massa nunc quis dolor. </p><br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, magna at malesuada placerat, massa lorem pretium turpis, eget pretium massa nunc quis dolor. Phasellus tempus, nisl a tristique rhoncus, nisi nibh tempus lorem, ut auctor ex diam mattis erat.  </p>
        <button>HOW IT WORKS</button>
      </div>
     
   
    </div>
    </section>
    </Layout>
  );
}

export default Register;









































// import React, { useState } from "react";
// import { useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "../../axiosConfig";
// import classes from './Login.module.css'
// import { FaEye } from "react-icons/fa6";
// import { FaRegEyeSlash } from "react-icons/fa";
// import Layout from "../Layout/Layout";


// function Login() {
//   const navigate = useNavigate();
//   const emailDom = useRef();
//   const passwordDom = useRef();
//   const [visible,setVisible]=useState(false)
//   const handleVisblity =()=>{
//     setVisible(!visible)
//   }
//   async function handleSubmit(e) {
//     e.preventDefault();

//     const emailvalue = emailDom.current.value;
//     const passwordvalue = passwordDom.current.value;
//     if (!emailvalue || !passwordvalue) {
//       alert("please provide all required information");
//       return;
//     }

//     try {
//     const {data}=  await axios.post("/users/login", {
//         email: emailvalue,
//         password: passwordvalue,
//       });
//       alert("login sucessfully.");
//       localStorage.setItem("token", data.token)
//       console.log(data);
//       navigate("/");
//     } catch (error) {
//       alert(error?.response?.data?.msg);
//       console.log(error.response.data);
//     }
//   }

//   return (
//     <Layout>
//     <section className={classes.Login_container}>
//       <div className={classes.left_Login_container}>
        
    
//       <form onSubmit={handleSubmit} action="">
//         <h4>Login to your account</h4>
//         <p>Don't have an account? <span><Link to={"/register"}>Create a new account</Link></span></p>

//         <div>
        
//           <input ref={emailDom} type="email" placeholder="Your Email" />
//         </div>
//         <br />
//         <div>
        
//           <input ref={passwordDom} type={(!visible)?"password":"text"} placeholder="Your Password " />
//           <label  htmlFor=""> { (!visible)? (<FaRegEyeSlash onClick={handleVisblity}/>):(<FaEye onClick={handleVisblity}/>)
//           }
//           </label>
//         </div>
//         <button type="submit">Submit</button>
//         <br />
//         <Link to={"/register"}> Create an account?</Link>
       
//       </form>
    
//       </div>
//       <div className={classes.right_Login_container}>
//         <h5>About</h5>
//         <h1>Evangadi Network Q&A </h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, magna at malesuada placerat, massa lorem pretium turpis, eget pretium massa nunc quis dolor. Phasellus tempus, nisl a tristique rhoncus.</p><br />
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, magna at malesuada placerat, massa lorem pretium turpis, eget pretium massa nunc quis dolor. </p><br />
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, magna at malesuada placerat, massa lorem pretium turpis, eget pretium massa nunc quis dolor. Phasellus tempus, nisl a tristique rhoncus, nisi nibh tempus lorem, ut auctor ex diam mattis erat.  </p>
//         <button>HOW IT WORKS</button>
//       </div>
//     </section>
//     </Layout>
//   );
// }

// export default Login;
