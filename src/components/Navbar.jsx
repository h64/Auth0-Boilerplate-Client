import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"

function Navbar() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
 
    return (
        <nav>
            <Link to="/">Home</Link>
            { isAuthenticated ? (
                <>
                    <Link to="/profile">Profile</Link>
                    <span onClick={() => logout({ returnTo: window.location.origin })}>
                        Log out
                    </span>
                </>
            ) : (
                <span onClick={() => loginWithRedirect()}>
                    Login
                </span>
            )}
        </nav>
    )
}

export default Navbar