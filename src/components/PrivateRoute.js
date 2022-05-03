import React  from 'react'
import { Route , Redirect } from 'react-router-dom'
import { useAuth } from './AuthProvider'

const PrivateRoute = ({component : Component  , ...rest  }) => {
    const {currentUser} = useAuth()
    return (
        <div>
            <Route {...rest} render={props =>{

               return currentUser ? <Component {...props} /> : <Redirect to="/signin" />
            }}>
            </Route>
        </div>
    )
}
export default PrivateRoute