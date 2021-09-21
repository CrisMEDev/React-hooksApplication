import React, { useState } from 'react';

import { useCounter } from '../../hooks/useCounter';

import { Small } from './Small';
import './memos.css';

export const Memorize = () => {

    const { state:counter, increment } = useCounter( 10 );

    const [show, setShow] = useState(true);
    
    return (
        <>
            <h1>Counter: <Small value={counter} /> </h1>
            <hr />

            <button
                onClick={ () => increment(1) }
                className="btn btn-primary">
                +1
            </button>

            <button
                onClick={ () => setShow(!show) }
                className="btn btn-outline-primary ms-3">
                Show/Hide { JSON.stringify( show, null, 10 ) }
            </button>
        </>
    );

}

