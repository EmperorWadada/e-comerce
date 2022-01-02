import React, { useState } from 'react'
import CustomButton from '../custom-button/custom-button'
import { auth, createUserProfileDocument } from '../firebase/firebase.util'
import FormInput from '../form-input/form-input.component'
import './sign-up.style.scss'
import { signUpStart } from '../../redux/user-reducer/user.action'
import { connect } from 'react-redux'

const SignUp = ({ signUpStart}) => {
  const [userCredentials, setUserCredentials] = useState(
    {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
  )

  const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        if ( password !== confirmPassword) {
            alert("Password didn't match");
            return;
        }

        signUpStart({email, password, displayName});

    //     try { 
    //         // const { user } = await auth.createUserWithEmailAndPassword(email, password);
    //         // createUserProfileDocument(user, {displayName})

    //         this.setState({
    //             displayName: '',
    //             email: '',
    //             password: '',
    //             confirmPassword: ''
    //         });

    //     } catch (error) {
    //         console.log(error);
    //     }
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setUserCredentials({...userCredentials, [name] : value});
    }

    return(
        <div className='sign-up'>
            <h2 className='title'>I do not hava an account</h2>
            <span>Sign up with your email</span>

            <form className='sign-up-form' action="" onSubmit={handleSubmit}>
                <FormInput
                type='text'
                name='displayName'
                onChange={handleChange}
                value={displayName}
                label='Display Name'
                required
                />
                <FormInput
                type='email'
                onChange={handleChange}
                name='email'
                value={email}
                label='Email'
                required
                />
                <FormInput
                type='password'
                name='password'
                onChange={handleChange}
                value={password}
                label='Passwrod '
                required
                />
                <FormInput
                type='password'
                name='confirmPassword'
                onChange={handleChange}
                value={confirmPassword}
                label='Confirm Password '
                required
                />
                
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProp = dispatch => ({
    signUpStart: (userCredentials)=> dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProp)(SignUp);