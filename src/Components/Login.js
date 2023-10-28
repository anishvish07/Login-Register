import React from 'react';
import { BrowserRouter as Router, Switch , Link ,Route } from 'react-router-dom';
const Login = (props) => {
    return (
        <div>
            <div className='container-fluid mt-3'>
            <div className='container card'>
            <div className='row' >
            <h3 className='text-danger center col-11'> Login Credential</h3>
            <h5 className='col-1'><Link to='/Register'>Register</Link></h5>
            </div><br/>
            
            <form onSubmit={props.handle}>
            <div className='form-group'>
            <label htmlFor='emailInput'>Email :-&emsp;</label>
            <input className='form-control' type='email' name='email' id='emailInput'/> 
            </div><br/>
             <div className='form-group'>
            <label className='text-success' htmlFor='passInput'>Password:- &emsp;</label>
            <input className='form-control' type='password' name='pass' id='passInput'/> 
            </div><br/>
            <button type='submit ' className='text-black btn btn-danger'>Login</button>&emsp;
            <input type='reset' className='text-danger btn btn-black'/>      
            
            </form>
            </div>
            </div>
        </div>
    );
}

export default Login;
