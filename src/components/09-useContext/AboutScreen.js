import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);
    
    const handleClick = () => {

        setUser({});

    }

    return (
        <>
            <h1>About Screen</h1>
            <hr />

            <pre>{ JSON.stringify( user ) }</pre>

            <button
                onClick={handleClick}
                className="btn btn-primary"
            >
                Logout
            </button>
        </>
    )
}
