import React from 'react'
import { withFirebase } from '../Firebase/index'
import {AuthUserContext} from "./index";
type AppState = {
    authUser: any | object
}
type AppProps = {
    firebase: any
}
const withAuthentication = (Component: any) => {
    class WithAuthentication extends React.Component<AppProps, AppState> {
        state: AppState = {
            authUser: null
        }
        componentDidMount() {
            this.props.firebase.auth().onAuthStateChanged((authUser: any) => {
                authUser
                    ? this.setState({ authUser })
                    : this.setState({ authUser: null });
            })
        }
        render() {
            const { authUser } = this.state;

            return  (
                    <AuthUserContext.Provider value={authUser}>
                        <Component {...this.props} />
                    </AuthUserContext.Provider>
                )

        }

    }
    return withFirebase(WithAuthentication)
}
export default withAuthentication