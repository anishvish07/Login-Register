import React from 'react';
import './Register.css';
import { BrowserRouter as Router, Switch , Link ,Route } from 'react-router-dom';

const Register = (props) => {
    const style = {
       color : 'violet',
       fontWeight : '2px',
       textAlign : 'left',


    }
    return (
        
            <div className='container-fluid mt-3'>
            <div className='container card'>
            <div className='row' >
            <h3 className='text-danger center col-11'> Registeration Form</h3>
            <h5 className='col-1'><Link to='/Login'>Login</Link></h5>
            </div><br/>
            <p className='text-center'>{props.message}</p>
            <button className='btn btn-danger border border-black' onClick={props.google}>Sign In With Google 🥸</button><br/>
            <button className='btn btn-primary border border-primary' onClick={props.fb}>Sign In With Facebook 🫠</button><br/>  
            <form onSubmit = {props.register}>
            <div className='form-group'>
            <label style={style} htmlFor='emailInput'>Email :-&emsp;</label>
            <input className='form-control' type='email' name='email' id='emailInput'/> 
            </div><br/>
            <div className='row'>
            <div className='form-group col'>
            <label className='text-primary' htmlFor='firstNameInput'> First Name:- &emsp;</label>
            <input className='form-control' type='text' name='firstName' id='firstNameInput'/> 
            </div>
            <div className='form-group col'>
            <label className='text-dander' htmlFor='lastNameInput'> Last Name:- &emsp;</label>
            <input className='form-control' type='text' name='lastName' id='lastNameInput'/> 
            </div>
            </div><br/>
            
             <div className='form-group'>
            <label className='text-success' htmlFor='passInput'>Password:- &emsp;</label>
            <input className='form-control' type='password' name='pass' id='passInput'/> 
            </div><br/>
             <div className='form-group'>
            <label className='text-danger' htmlFor='passInput1'> Confirm Password:- &emsp;</label>
            <input className='form-control' type='password' name='confirm' id='passInput1'/> 
            </div><br/>
            <div className='form-group'>
            <label className='text-warning' htmlFor='phoneInput'>Phone :- &emsp;</label>
            <input className='form-control' type='text' name='phone' id='phoneInput'/> 
            </div><br/>
            <button type='submit '  className='text-black btn btn-danger'>Register</button>&emsp;
            <input type='reset' className='text-danger btn btn-black'/>    
            {props.message && <div>{props.message}</div>}  
            
            </form>
            </div>
            </div>
           
        
    );
}

export default Register;
