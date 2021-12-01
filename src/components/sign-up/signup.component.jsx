import React from 'react'
import CustomButton from '../custom-button/custom-button'
import { auth, createUserProfileDocument } from '../firebase/firebase.util'
import FormInput from '../form-input/form-input.component'
import './sign-up.style.scss'

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if ( password !== confirmPassword) {
            alert("Password didn't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name] : value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state; 
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not hava an account</h2>
                <span>Sign up with your email</span>

                <form className='sign-up-form' action="" onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    onChange={this.handleChange}
                    value={displayName}
                    label='Display Name'
                    required
                    />
                    <FormInput
                    type='email'
                    onChange={this.handleChange}
                    name='email'
                    value={email}
                    label='Email'
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    onChange={this.handleChange}
                    value={password}
                    label='Passwrod '
                    required
                    />
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    onChange={this.handleChange}
                    value={confirmPassword}
                    label='Confirm Password '
                    required
                    />
                    
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;