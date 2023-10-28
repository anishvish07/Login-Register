import React, { cloneElement } from 'react';
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
            <div className='container card decorate'>
            <div className='row' >
            <h3 className='text-danger  col-11 font-weight-bold fs-2'> Registeration Form : ~ </h3>
            <button   className='col-1 btn-dark btn-text-primary button'><Link style={{color: "black"}} to='/Login'>Login</Link></button>
            </div><br/>
            <p className='text-center'>{props.message}</p>
            <button className='btn btn-danger border border-black m-auto' onClick={props.google} style={{width : '50%'}}>Sign In With Google 🥸</button><br/>
            <button className='btn btn-primary border border-primary m-auto' onClick={props.fb} style={{width : '50%'}}>Sign In With Facebook 🫠</button><br/>  
            <form onSubmit = {props.register}>
            <div className='form-group'>
            <label style={style} htmlFor='emailInput' className='text-dark font-weight-bold fs-5 fw-bolder'>Email :-&emsp;</label>
            <input className='form-control' type='email' name='email' id='emailInput'/> 
            </div><br/>
            <div className='row'>
            <div className='form-group col' style={{borderRadius : '15px 50px'}}>
            <label className='text-primary text-dark font-weight-bold fs-5 fw-bolder' htmlFor='firstNameInput' > First Name:- &emsp;</label>
            <input className='form-control' type='text' name='firstName' id='firstNameInput'/> 
            </div>
            <div className='form-group col'>
            <label className='text-dander text-dark font-weight-bold fs-5 fw-bolder' htmlFor='lastNameInput'> Last Name:- &emsp;</label>
            <input className='form-control' type='text' name='lastName' id='lastNameInput'/> 
            </div>
            </div>
            
             <div className='form-group'>
            <label className='text-success text-dark font-weight-bold fs-5 fw-bolder' htmlFor='passInput'>Password:- &emsp;</label>
            <input className='form-control' type='password' name='pass' id='passInput'/> 
            </div><br/>
             <div className='form-group'>
            <label className='text-danger text-dark font-weight-bold fs-5 fw-bolder' htmlFor='passInput1'> Confirm Password:- &emsp;</label>
            <input className='form-control' type='password' name='confirm' id='passInput1'/> 
            </div><br/>
            <div className='form-group'>
            <label className='text-warning text-dark font-weight-bold fs-5 fw-bolder' htmlFor='phoneInput'>Phone :- &emsp;</label>
            <input className='form-control' type='text' name='phone' id='phoneInput'/> 
            </div><br/>
            <button type='submit '  className='text-black btn btn-danger'>Register</button>&emsp;
            <input type='reset' className='text-danger btn btn-light'/>    
            {props.message && <div>{props.message}</div>}  
            
            </form>
            </div>
            </div>
           
        
    );
}

export default Register;
