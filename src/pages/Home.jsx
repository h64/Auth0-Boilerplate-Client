import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

function Home() {
    const { user } = useAuth0();
    return (
        <div>
            <h1>Home Page</h1>
            { user ? <Link to="/protectedPage">Secret Resource!</Link> : "" }
        </div>
    )
}

export default Home