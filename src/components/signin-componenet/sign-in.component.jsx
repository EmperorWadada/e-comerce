import React from 'react';
import CustomButton from '../custom-button/custom-button';
// import { signInWithGoogle, auth } from '../firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';
import { googleSignInStart, emailSignInStart } from '../../redux/user-reducer/user.action';
import { connect } from 'react-redux';
import { useState } from 'react';


const SignIn = ({emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setUserCredentials] = useState({email:'', password:''});
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);

        // try { 
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({email: '', password: ''})
        // } catch (error) {
        //     console.log(error);
        // }

    };

    const handleChange = (event) => {
        const {value, name } = event.target;
        setUserCredentials({...userCredentials, [name]: value})
    }


    // render() {
              
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>  
                    <FormInput name='email' 
                        type='email' 
                        handleChange={handleChange} 
                        value={email} 
                        required 
                        label='email'
                    />
  
                    <FormInput 
                        name='password' 
                        value={password} 
                        handleChange={handleChange} 
                        required 
                        type='password'
                        label='password' 
                    />
                    <div className='buttons'>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                        {' '}
                        Sign in with google
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);