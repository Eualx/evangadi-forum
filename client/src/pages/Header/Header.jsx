import React,{useContext, useEffect} from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import logo from '../../assets/img/10002.png'
import classes from "./Header.module.css"
import { AppState } from '../../App'
function Header() {
  const { user, setUser } = useContext(AppState);
  const navigate = useNavigate();


  const handleAuthButtonClick = () => {
    if (user) {
    // .msg=="valid user"
      localStorage.removeItem('token');
      setUser();
     
      navigate('/register');
      // setTimeout(() => { window.location.reload(); navigate('/register')}, 3000)
    } 
    else{
       navigate('/register');
    }
  };


  // useEffect(()=>{
  //   handleAuthButtonClick()

  // },[])

  // useEffect(()=>{},[user])




  return (
    <div className={classes.header_container}>
      
        <div className={classes.logo}>
        <Link to={ user && "/"}><img src={logo} alt="" /></Link>
        </div>
        <div className={classes.right_container}>
        <div><Link to={ user && "/"}>Home</Link></div>
       <div>
        <Link to="">How it Works</Link>
       </div>
       <div><button type="button" onClick={handleAuthButtonClick}>
            {user ? 'Log out' : 'Log in'}
          </button></div>
       
        </div>
        
        
    </div>
  )
}

export default Header


