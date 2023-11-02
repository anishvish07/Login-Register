import React from 'react';
import './Register.css';
import 'animate.css';

import { BrowserRouter as Router, Switch , Link ,Route } from 'react-router-dom';
const Login = (props) => {
    return (
        <div className='contain ' >
        
            <div className='container-fluid mt-3 '>
            <div className='adjust'>
            <div className='container con small-card card decorate'>
            <div>
            <div className='colmn'>
            <h3 className='text-white mp-3 fs-2 fst-italic animate__animated animate__tada txt' > Login Credential :~ </h3>
           </div><br/>
           <div className='colmn1'>
           <button type="button" className=' button text-wrap'  ><Link style={{color: "black"}} to='/Register'>Register</Link></button>
            </div></div>
            
            <form onSubmit={props.handle}>
            <div className='form-group'>
            <label htmlFor='emailInput' className='text-white font-weight-bold fs-5 fw-bolder'>Email :-&emsp;</label>
            <input className='form-control' type='email' name='email' id='emailInput' placeholder='Ex-anish@gmail.com ' required/> 
            </div>
             <div className='form-group'>
            <label className='text-white fw-bolder fs-5' htmlFor='passInput'>Password:- &emsp;</label>
            <input className='form-control' type='password' name='pass' id='passInput'  placeholder='Ex-Abcd123$' required/> 
            </div><br/><br/>
            <div>
            <button type='submit ' className='text-black btn btn-danger button'>Login</button>&emsp;
            <input type='reset' className='text-danger btn btn-light'/>      
            <h3 className='foot'>
                          <span>C</span>
  <span>o</span>
  <span>d</span>
  <span>e</span>
  <span>B</span>
  <span>y</span>
  <span>~</span>
  <span>@</span>
  <span>n</span>
  <span>i</span>
  <span>s</span>
  <span>h</span> 
            </h3>

            </div>
            </form>
            </div>
            </div>
            
            </div>
            <h1 className='text-center  fs-3 foots'><Link className=' btn btn-secondary fs-5 glow' to ='/Register'>New User - Register</Link> </h1>
            
        </div>
    );
}

export default Login;
