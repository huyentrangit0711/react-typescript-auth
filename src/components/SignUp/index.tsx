import React from 'react'
import SignUpForm from "./SignUpForm";
import { withFirebase } from '../Firebase/index'
import { withRouter } from "react-router";
import { compose } from 'recompose'
const SignUpFormContext = compose(withFirebase, withRouter)(SignUpForm)
// const SignUpFormContext = withFirebase(SignUpForm)
const SignUpPage = () => {
    return (
        <div>
            SignUp
            <SignUpFormContext />

        </div>
    )
}
export default SignUpPage
