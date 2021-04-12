import React from 'react'
import SignInForm from "../SignIn/SignInForm";
import SignUpLink from "../SignUp/SignUpLink";
import { withFirebase } from '../Firebase/index'
import { withRouter } from "react-router";
import { compose } from 'recompose'
const SignInFormContext = compose(withFirebase, withRouter)(SignInForm)
const SignInPage = () => {
    return (
        <div>
            SignInPage
            <SignInFormContext />
            <SignUpLink />
        </div>
    )
}
export default SignInPage
