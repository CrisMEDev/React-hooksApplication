import React, { useRef } from 'react';

import '../01-useState/counter.css'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {

        // document.querySelector('input').select();
        inputRef.current.select();

    }

    return (
        <>
            <h1>Focus screen</h1>

            <input
                ref={ inputRef }
                className="form-control" placeholder="Tu nombre"
            />
            
            <button
                onClick={ handleClick }
                className="btn btn-dark mt-5">
                Focus
            </button>
            
        </>
    )
}
