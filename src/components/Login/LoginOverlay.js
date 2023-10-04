import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import Register from '../Register/Register';

function LoginOverlay({ onClose,setisOverlay,setLoggedin,setProfileName }) {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [uers,setUsers]=useState([]);
  const [message,setMessage]=useState('');


  const [values,setValues]=useState({
    email:'',
    password:''
  });

  const handleClick = () => {
    //setisOverlay(false);
    setIsRegisterOpen(true);
  }
;
  const handleLogin=(e)=>{
    e.preventDefault();
    const checkData=async()=>{
    try {
      const resp = await fetch(
        'https://chef-project-cfcc5-default-rtdb.firebaseio.com/users.json'
      );
      const data = await resp.json();

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const value = data[key];
          const { name,email,password }=value;
          if(email === values.email && password === values.password){
              setLoggedin(true);
              setProfileName(name);
              setisOverlay(false);
          }
          else if(email !== values.email ||  password !== values.password){
            setMessage('Wrong Credientials....!');
          }
          
        }
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
    checkData();
  }

  const handleChange=(e)=>{
    
    setValues({
      ...values, [e.target.name]:e.target.value
    })

  }

  return (
    <div className="login-overlay">
      <div className="login-container">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={values.email} name="email" onChange={handleChange} placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={values.password} name="password" onChange={handleChange} placeholder="Enter your password" />
          </div>
          <button className="button" type="submit" onClick={ handleLogin }>Login</button>
        </form>
        <div className="or-divider">Or</div>
        <button className="registration-link" onClick={handleClick}>
          Don't have an account? <span>Register here</span>
        </button>
       
      </div>
      {isRegisterOpen && <Register onClose={()=>setIsRegisterOpen(false)}/>}
    </div>
  );
}

export default LoginOverlay;
