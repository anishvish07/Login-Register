import React from 'react';
import './Register.css';
import 'animate.css';

import { BrowserRouter as Router, Switch , Link ,Route } from 'react-router-dom';
const Login = (props) => {
    return (
        <div className='contain ' >
        
            <div className='container-fluid mt-3  '>
            <div className='adjust'>
            <div className='container containers card decorate'>
            <div className='row' >
            <h3 className='text-danger  col-lg-8 mp-3 fst-italic animate__animated animate__tada ' > Login Credential :~ </h3>
            <h3 className='col-lg'></h3>
           <button type="button" className='col-lg-2  button text-wrap'  ><Link style={{color: "black"}} to='/Register'>Register</Link></button>
            </div><br/>
            
            <form onSubmit={props.handle}>
            <div className='form-group'>
            <label htmlFor='emailInput' className='text-dark font-weight-bold fs-5 fw-bolder'>Email :-&emsp;</label>
            <input className='form-control' type='email' name='email' id='emailInput'/> 
            </div><br/>
             <div className='form-group'>
            <label className='text-dark fw-bolder fs-5' htmlFor='passInput'>Password:- &emsp;</label>
            <input className='form-control' type='password' name='pass' id='passInput'/> 
            </div><br/><br/>
            <button type='submit ' className='text-black btn btn-danger button'>Login</button>&emsp;
            <input type='reset' className='text-danger btn btn-light'/>      
            
            </form>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Login;
