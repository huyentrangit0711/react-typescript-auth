import React from 'react'
import { auth } from '../Firebase/'
import { withFirebase } from '../Firebase/index'
const SignOutButton = () => {
    return (
        <button onClick={() => auth.doSignOut()}>Sign out </button>
    )
}
export default withFirebase(SignOutButton)
