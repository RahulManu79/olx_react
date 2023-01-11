import React, { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/FirebaseContext';
import { useHistory ,Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'semantic-ui-react';

export default function Signup() {



  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit =(data)=>{
    console.log(data);
    firebase.auth().createUserWithEmailAndPassword(data.email,data.passWord).then((result)=>{
      result.user.updateProfile({displayName:data.name}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:data.name,
          phone:data.phone
        }).then(()=>{
          history.push('/login')
        })
      })
    })
  }
  
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input form-control"
            type="text"
            id="fname"
            name="name"
            {...register("name",{ required: true, maxLength: 10 })}
            

          />
        
          </Form.Field>
          {errors.name && <p>Please check the User Name</p>}
          <br />
          <Form.Field>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input form-control"
            type="email"
            id="fname"
            name="email"
            {...register("email",{ required: true, maxLength: 30 })}

          />
          </Form.Field>
          {errors.email && <p>Email must be valid</p>}

          <br />
          <Form.Field>

          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input form-control"
            type="number"
            id="lname"
            name="phone"
            {...register("phone",{ required: true, maxLength: 10 })}

          />
                    </Form.Field>

          <br />
          <Form.Field>
          {errors.phone && <p>Number must be a valid number</p>}


          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input form-control"
            type="password"
            id="lname"
            name="password"
            {...register("passWord",{ required: true, maxLength: 10 })}

          />
                    </Form.Field>
                    {errors.name && <p>Pass must unsist of 4 letters</p>}


          <br />
          <br />
          <button>Signup</button>
        </Form>
        <Link to='/login' >
         <p style={{color:'black'}}>Login</p>
        </Link>
        
      </div>
    </div>
  );
}
