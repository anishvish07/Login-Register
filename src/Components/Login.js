import React from 'react';
import './Register.css';
import 'animate.css';

import { BrowserRouter as Router, Switch , Link ,Route } from 'react-router-dom';
const Login = (props) => {
    return (
        <div className='contain ' >
        
            <div className='container-fluid mt-3  '>
            <div className='adjust'>
            <div className='container con small-card card decorate'>
            <div >
            <div className='colmn'>
            <h3 className=' mp-3 fst-italic animate__animated animate__tada ' > Login Credential :~ </h3>
           </div>
           <div className='colmn1'>
           <button type="button" className=' button text-wrap'  ><Link style={{color: "black"}} to='/Register'>Register</Link></button>
            </div></div>
            
            <form onSubmit={props.handle}>
            <div className='form-group'>
            <label htmlFor='emailInput' className='text-dark font-weight-bold fs-5 fw-bolder'>Email :-&emsp;</label>
            <input className='form-control' type='email' name='email' id='emailInput'/> 
            </div>
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
