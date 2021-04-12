import React, { ReactNode } from 'react'
import { auth } from '../Firebase/'
import * as ROUTES from '../../constants/routes'
// interface FIREBASE {
//  doCreateUserWithEmailAndPassword: void
// }
type Props = {
    children?: ReactNode,
    history?: any
}
interface INITIAL_STATE {
    username: string,
    email: string,
    passwordOne: string,
    passwordTwo: string,
    error: null|any
}
const SignUpForm = (props: Props) => {
    const { history } = props
    const initialState: INITIAL_STATE = {
        username: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        error: null
    }
    const [info, setInfo] = React.useState(initialState)
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error
    } = info
    const isInvalid: boolean|undefined = passwordOne !== passwordTwo || email === '' || username === ''

    const handleOnChange = (event:React.FormEvent<HTMLInputElement>) => {
        const {name, value} = event.currentTarget
        setInfo((prevState:INITIAL_STATE) => ({
            ...prevState,
            [name]: value
        }));

    }
    const handleOnSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        // console.log('firebase', firebase)
        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then((authUser: any) => {
                setInfo({ ...initialState });
                history.push(ROUTES.HOME)
                // this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                setInfo((prevState:INITIAL_STATE) => ({
                    ...prevState,
                    error
                }));
            });
        e.preventDefault()
    }
    return (
        <form>
            <input
                name="username"
                value={username}
                onChange={(event) => handleOnChange(event)}
                type="text"
                placeholder="Full Name"
            />
            <input
                name="email"
                value={email}
                onChange={(event) => handleOnChange(event)}
                type="text"
                placeholder="Email Address"
            />
            <input
                name="passwordOne"
                value={passwordOne}
                onChange={(event) => handleOnChange(event)}
                type="password"
                placeholder="Password"
            />
            <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={(event) => handleOnChange(event)}
                type="password"
                placeholder="Confirm Password"
            />
            <button type="submit"
                    onClick={(event) => handleOnSubmit(event)}
                    disabled={isInvalid}>Sign Up</button>

            {error && <p>{error.message}</p>}
        </form>
    )
}
export default SignUpForm
