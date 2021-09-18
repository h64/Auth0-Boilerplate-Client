import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react';

function Profile() {
    const { user, isLoading } = useAuth0();

    useEffect(() => {
        const serverUrl = process.env.REACT_APP_SERVER_URL    

        fetch(`${serverUrl}/auth`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ auth0Id: user.sub })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [user?.sub])

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    )

}

export default Profile