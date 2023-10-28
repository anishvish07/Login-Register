import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';
import { v4 as uuidv4 } from 'uuid';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";
import { BrowserRouter as Router ,Routes, Link ,Navigate ,Route } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,GoogleAuthProvider ,FacebookAuthProvider, signInWithPopup} from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALIRloAhL_EchxRgcscub2NY4mhUDsZUI",
  authDomain: "anish-form.firebaseapp.com",
  projectId: "anish-form",
  storageBucket: "anish-form.appspot.com",
  messagingSenderId: "366738935742",
  appId: "1:366738935742:web:e5a3b66fc8c3f06179f3ef",
  measurementId: "G-8E7TZQ5JNM"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(); // Initialize Firebase authentication
class Container extends Component {
    constructor (props){
        super(props);

        this.state = {
            id:uuidv4(),
            email: null,
            password: null,
            isSubmitted: false,
            firstName: null,
            lastName: null,
            phone: null,
            confirmpassword :null,
        }
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
            confirmpassword,
            isSubmitted: true
        },()=>{
            const userData = {
            email,
            password,
            firstName,
            lastName,
            confirmpassword,
            phone
        };
        localStorage.setItem('userData', JSON.stringify(userData));

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
    loginHandler = (events)=>{
        events.preventDefault();
        const email = events.target.email.value;
        const password  = events.target.pass.value;
        signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            const user = userCredential.user;
            alert('Login Successfully');
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
    facebookHandler = () => {
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


    submitHandler2 = (handle)=>{
        handle.preventDefault();
        alert('Logged In');
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
        // Inside your login function
        const userEmail = handle.target.email.value;
        const userPassword = handle.target.pass.value;

    if (userEmail === storedUserData.email && userPassword === storedUserData.password) {
    alert('Login successful!');
} else {
    alert('Invalid credentials. Please try again.');
}
//   {email === null && password === null && !isSubmitted ? }

    }
    
   render() {
        const { email, password, lastName, firstName, phone, confirmpassword ,isSubmitted } = this.state;
        return(
      <Router>
            <div>
                <Routes>
                    <Route path='/Register' element={<Register click={this.submitHandler} fb={this.facebookHandler} register={this.registrationHandler} google={this.googleLoginHandler} message={this.state.message} />} />
                    <Route path='/Login' element={<Login handle={this.loginHandler} />} />
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
        </Router>
        )
       
    }
}

export default Container;







