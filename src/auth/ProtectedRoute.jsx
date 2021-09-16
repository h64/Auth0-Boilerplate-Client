import { Route } from 'react-router-dom'
import { withAuthenticationRequired } from "@auth0/auth0-react"

// A Higher Order Component that wraps <Route>'s that need to be
// login-protected
function ProtectedRoute({ component, ...args }) {
    return <Route
        component={withAuthenticationRequired(component)}
        { ...args }
    />
}

export default ProtectedRoute