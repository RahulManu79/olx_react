import React, { useState,useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import {FirebaseContext} from '../../store/FirebaseContext'
import './Login.css';


function Login() {
  const [password,setPassword] = useState('');
  const [email , setEmail] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  const handleLogin = ((e)=>{
    e.preventDefault()
    console.log('stage try')
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      console.log('stage success')

      history.push('/')
    }).catch((error)=>{
      console.log('stage failed')

      alert(error.message)
    })

  })
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>
         <a style={{color:'black'}}>Signup</a>
        </Link>
        
      </div>
    </div>
  );
}

export default Login;
