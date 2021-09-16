import { useAuth0 } from "@auth0/auth0-react"
import { useState } from "react";

function ProtectedPage() {
    const { user } = useAuth0();
    const [food, setFood] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        const url = process.env.REACT_APP_SERVER_URL
        const response = await fetch(url + '/favoriteFoods', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            // must send body in the form of an object
            body: JSON.stringify({ food: food }) 
        })
        const json = await response.json()

        console.log(json)
    }

    return (
        <div>
            <h1>You found the protected page!</h1>
            <p>Note: Only people who are logged in can see this page</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="food">Favorite Foods: </label>
                <input 
                    type="text" 
                    onChange={ e => setFood(e.target.value) }
                    value={ food }
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ProtectedPage