import React from 'react';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle, auth } from '../firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }


    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        } catch (error) {
            console.log(error);
        }

    };

    handleChange = (event) => {
        const {value, name } = event.target;
        this.setState({[name]: value})
    }


    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>  
                    <FormInput name='email' 
                        type='email' 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        required 
                        label='email'
                    />
  
                    <FormInput 
                        name='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        required 
                        type='password'
                        label='password' 
                    />
                    <div className='buttons'>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton onClick={ signInWithGoogle} isGoogleSignIn>
                        {' '}
                        Sign in with google
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;