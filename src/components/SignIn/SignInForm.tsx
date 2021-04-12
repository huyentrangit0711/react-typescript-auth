import React, { ReactNode } from 'react'
import { auth } from '../Firebase/'
import * as ROUTES from '../../constants/routes'
type Props = {
    children?: ReactNode,
    history?: any
}
interface INITIAL_STATE {
    email: string,
    password: string,
    error: null|any
}
const SignInForm = (props: Props) => {
    const { history } = props
    console.log('history', history)
    const initialState: INITIAL_STATE = {
        email: '',
        password: '',
        error: null
    }
    const [info, setLoginInfo] = React.useState(initialState)
    const {
        email,
        password,
        error
    } = info
    const isInvalid: boolean|undefined = email === '' || password === ''

    const handleOnChange = (event:React.FormEvent<HTMLInputElement>) => {
        const {name, value} = event.currentTarget
        setLoginInfo((prevState:INITIAL_STATE) => ({
            ...prevState,
            [name]: value
        }));

    }
    const handleOnSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        // console.log('firebase', firebase)
        auth.doSignInWithEmailAndPassword(email, password)
            .then((userCredential: any) => {
                setLoginInfo({ ...initialState });
                history.push(ROUTES.HOME)
                // this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                setLoginInfo((prevState:INITIAL_STATE) => ({
                    ...prevState,
                    error
                }));
            });
        e.preventDefault()
    }
    return (
        <form>
            <input
                name="email"
                value={email}
                onChange={(event) => handleOnChange(event)}
                type="text"
                placeholder="Email Address"
            />
            <input
                name="password"
                value={password}
                onChange={(event) => handleOnChange(event)}
                type="password"
                placeholder="Password"
            />
            <button type="submit"
                    onClick={(event) => handleOnSubmit(event)}
                    disabled={isInvalid}>Sign In</button>

            {error && <p>{error.message}</p>}
        </form>
    )
}
export default SignInForm
