import React, {ReactNode} from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import SignOutButton from "../SignOut";
import { AuthUserContext } from '../Session/index'
type NavigationProps = {
    authUser?: any,
    children?: ReactNode
}
const Navigation = (props: NavigationProps) => {
    return (
        <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationWithAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
        </div>
);
};
const NavigationWithAuth =() => {
    return (
        <ul>
            <li>
                <Link to={ROUTES.SIGNUP}>Sign-up</Link>
            </li>
            <li>
                <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
            <li>
                <Link to={ROUTES.ADMIN}>Admin</Link>
            </li>
            <li>
                <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
            <li>
                <SignOutButton />
            </li>
        </ul>
    )
}
const NavigationNonAuth = () => {
    return (
        <ul>
            <li>
                <Link to={{pathname: ROUTES.SIGNIN}}>Sign-in</Link>
            </li>
            <li>
                <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
        </ul>
    )
}
export default Navigation;
