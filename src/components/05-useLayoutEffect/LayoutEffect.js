import React, { useLayoutEffect, useRef, useState } from 'react';

import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

export const Layout = () => {

    const { state, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const { quote } = !!data && data[0];


    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        
        // Obtener el tamaño de la caja de texto con la referencia al p
        setBoxSize( pTag.current.getBoundingClientRect() );

    }, [quote]);

    return (
        <>
            <h1>Layout</h1>
            <hr />

            <blockquote className="blockquote text-end">
                <p
                ref={ pTag }
                className="mb-">
                    { quote }
                </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>

            <button onClick={ (event) => increment(1) } className="btn btn-primary" >
                Nueva frase
            </button>


        </>
    )
}
