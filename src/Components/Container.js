import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';
import Modal from './modal';
import PopUp from './Popup';
import './modal.css';
import { v4 as uuidv4 } from 'uuid';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";
import { BrowserRouter as Router ,Routes,Navigate ,Route } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,GoogleAuthProvider ,FacebookAuthProvider, signInWithPopup} from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL : process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(); // Initialize Firebase authentication
class Container extends Component {
    constructor (props){
        super(props);

        this.state = {
            id:uuidv4(),
            isModalOpen: false,
            email: null,
            password: null,
            isSubmitted: false,
            firstName: null,
            isPopUpOpen: false,
            lastName: null,
            phone: null,
            confirmpassword :null,
        }
    }
    openPop = ()=>{
        this.setState({isPopUpOpen : true});
    }
    closePop =()=>{
        this.setState ({isPopUpOpen : false})
    }
    openModal = () => {
        this.setState({ isModalOpen: true });
    }

    closeModal = () => {
        this.setState({ isModalOpen: false });
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert('Check It Before Submitting');
        const email = event.target.email.value;
        const password = event.target.pass.value;
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const phone = event.target.phone.value;
        const confirmpassword = event.target.confirm.value;
        this.setState({
            email,
            password,
            firstName,
            lastName,
            phone,
            isModalOpen : true,
            confirmpassword,
            isSubmitted: true
        },()=>{
            this.openModal();

        console.log(email, password, confirmpassword, firstName, lastName,  phone);
                           const dbRef = ref(database, 'form/' + this.state.id);
           set(dbRef, {
    email: this.state.email,
    password: this.state.password,
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    phone : this.state.phone,
    confirmpassword : this.state.confirmpassword
})
.then(() => {
    console.log("Data written successfully!");
})
.catch((error) => {
    console.error("Error writing data: ", error);
});

        });

    }
    registrationHandler = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.pass.value;
        const confirmpassword = event.target.confirm.value;
        if(password !==  confirmpassword){
          this.setState({message:"Password does not match"});
          return;
        }else{
            this.submitHandler(event);
        }
    
        // Create user with Firebase Authentication
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log('User registered:', user);
          })
          .catch((error) => {
            console.error('Error registering user:', error);
          }); 
    }
    loginHandler2 = ()=>{
    
    }
    loginHandler = (events)=>{
        events.preventDefault();
        const email = events.target.email.value;
        const password  = events.target.pass.value;
        signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            const user = userCredential.user;
            alert('Login Successfully');
               this.openPop();
        }).catch((err)=>{
            alert('Login error' , err);
            alert('Invalid credentials. Please try again.');
        })
    }
     googleLoginHandler = (e) => {
       e.preventDefault();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                alert('Google login successful!');
                // Proceed with any other actions you want to take after successful login
            })
            .catch((error) => {
                console.error('Error logging in with Google:', error);
                alert('Google login failed. Please try again.');
            });
    }
    facebookHandler = (e) => {
        e.preventDefault();
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                alert('Facebook login successful!');
                // Proceed with any other actions you want to take after successful login
            })
            .catch((error) => {
                console.error('Error logging in with Facebook:', error);
                alert('Facebook login failed. Please try again.');
            });
    }



    
    
   render() {
        const {  isModalOpen, isPopUpOpen, email,password, lastName, firstName, phone, confirmpassword ,isSubmitted } = this.state;
        return(
      <Router>
            <div>
                <Routes>
                    <Route path='/Register' element={<Register click={this.submitHandler} fb={this.facebookHandler} register={this.registrationHandler} google={this.googleLoginHandler} message={this.state.message} />} />
                    <Route path='/Login' element={<Login handle={this.loginHandler} />  }  />
                    <Route
                        path='/'
                        element={
                           email === null && password === null && !isSubmitted ? (
                                <Navigate to='/Login' />
                            ) : (
                                <Navigate to='/Register' />
                            )
                        }
                    />
                </Routes>
            </div>
             <Modal isOpen={isModalOpen} onClose={this.closeModal}>
                    {   isSubmitted && (
                        <>
                            <h2>Form Submitted! ☑️</h2>
                            <p>Your form has been successfully submitted.</p>
                        </>
                    )}

                </Modal>
               <PopUp isOpen={isPopUpOpen} onClose={this.closePop}>
                  { isPopUpOpen && (
                   <>
            <h2>Login Successfully! ☑️</h2>
            <p>Your form has been successfully logged In.</p>
                 </>
                )}
              </PopUp>
                
        </Router>
        )
       
    }
}

export default Container;







