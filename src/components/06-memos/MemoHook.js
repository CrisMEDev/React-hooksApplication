import React, { useState, useMemo } from 'react';

import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

import './memos.css';

export const MemoHook = () => {

    const { state:counter, increment } = useCounter( 2500 );

    const [show, setShow] = useState(true);

    // Si el counter cambia se usa el useMemo para generar una version memorizada
    // del resultado de procesoPesado
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
    
    return (
        <>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr />

            <p>{ memoProcesoPesado }</p>

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

