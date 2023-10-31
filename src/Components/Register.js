import React, { cloneElement ,useEffect } from 'react';
import './Register.css';
import 'animate.css';

import { BrowserRouter as Router, Switch , Link ,Route } from 'react-router-dom';

const Register = (props) => {
    const style = {
       color : 'violet',
       fontWeight : '2px',
       textAlign : 'left',


    }
      useEffect(() => {
        const video = document.querySelector('.background-video');
        video.playbackRate = 2; // Adjust the playback speed as needed
    }, []);
               
                      

    
    return (
           <div className='background-video' >
        
         <video autoPlay playsInline muted loop src={'video.mp4'} type="video/mp4"/>
         
      
       <div className='container-fluid  ad'>
    
            <div className='container containers card  small-card'>
             <div className='background-video1' >
             
        
         <video autoPlay playsInline muted loop src={'video.mp4'} type="video/mp4"/>
         
              
             
            
           {/* <div className='colmn1'>
          
            </div> */}</div>
            <div className='decorate2'>
             <p className=' font-weight-bold fs-1 animate__animated animate__tada txt colmn'> Registeration Form : ~ </p>
             <button   className=' colmn1 button text-wrap'><Link style={{color: "black"}} to='/Login'>Login</Link></button>
           </div>
            <p className='text-center text-danger animate__animated animate__fadeIn'>{props.message}</p>
            <button className='btn btn-danger border border-black m-auto' onClick={props.google} style={{width : '50%'}}>Sign In With Google <span class="google-like-emoji">G</span></button><br/>
            <button className='btn btn-primary border border-primary  m-auto' onClick={props.fb} style={{width : '50%'}}>Sign In With Facebook <span class="fb-like-emoji">F</span></button><br/>  
            <form onSubmit = {props.register}>
            <div className='form-group'>
            <label style={style} htmlFor='emailInput' className='text-dark font-weight-bold fs-5 fw-bolder'>Email :-&emsp;</label>
            <input className='form-control' type='email' name='email' id='emailInput'  placeholder='Ex-anish@gmail.com ' required/> 
            </div>
            <div className='row'>
            <div className='form-group col' style={{borderRadius : '15px 50px'}}>
            <label className='text-primary text-dark font-weight-bold fs-5 fw-bolder' htmlFor='firstNameInput' > First Name:- &emsp;</label>
            <input className='form-control' type='text' name='firstName' id='firstNameInput'  required/> 
            </div>
            <div className='form-group col'>
            <label className='text-dander text-dark font-weight-bold fs-5 fw-bolder' htmlFor='lastNameInput'> Last Name:- &emsp;</label>
            <input className='form-control' type='text' name='lastName' id='lastNameInput' required/> 
            </div>
            </div>
            
             <div className='form-group'>
            <label className='text-success text-dark font-weight-bold fs-5 fw-bolder' htmlFor='passInput'>Password:- &emsp;</label>
            <input className='form-control' type='password' name='pass' id='passInput'  required  placeholder='Ex-Abcd123$'/> 
            </div>
             <div className='form-group'>
            <label className='text-danger text-dark font-weight-bold fs-5 fw-bolder' htmlFor='passInput1'> Confirm Password:- &emsp;</label>
            <input className='form-control' type='password' name='confirm' id='passInput1' required/> 
            </div>
            <div className='form-group'>
            <label className='text-warning text-dark font-weight-bold fs-5 fw-bolder' htmlFor='phoneInput'>Phone :- &emsp;</label>
            <input className='form-control' type='text' name='phone' id='phoneInput'/> 
            </div><br/>
            <button type='submit ' className='text-dark btn-lg btn-sm btn-danger fs-5 '>Register</button>&emsp;
            <input type='reset' className='text-danger btn-lg btn-sm btn-dark fs-6'/>    
            <h5 style={{
              color : "red"
            }}>{<div>{props.message}</div>} </h5>

            </form>
            </div>
                                       <h3 className='foot '>
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

           
           </div>
            
            
           
        
    );
}

export default Register;
