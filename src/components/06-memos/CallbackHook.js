import React, { useCallback, useEffect, useState } from 'react'

import './memos.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    
    const [counter, setCounter] = useState(10);

    // const incrementar = () => {
    //     setCounter(counter + 1);
    // }

    const incrementar = useCallback(
        ( num = 1 ) => {
            setCounter( c => c + num );
        },
    [ setCounter] );

    // Otro caso de uso del useCallback es cuando se requiere la funcion del callback como dependencia
    // del useEffect ya que que si no se usa el useCallBack, en cada renderizado se tomaría la función como si fuera
    // una nueva lo que provocaria que se ejecutara el useEffect con cada renderizado
    useEffect( () => {
        // Aciones a ejecutar...
    }, [ incrementar ]);
    
    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={ incrementar }/>
        </div>
    )
}
