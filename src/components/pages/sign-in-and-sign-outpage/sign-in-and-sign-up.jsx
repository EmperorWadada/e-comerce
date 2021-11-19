import React from 'react';
import SignUp from '../../sign-up/signup.component';
import SignIn from '../../signin-componenet/sign-in.component';

import './sign-in-and-sign-up.style.scss'

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignUpPage;