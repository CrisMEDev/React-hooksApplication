import React from 'react';

import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter with hook: { state }</h1>
            <hr />
            <button onClick={ ( event ) => increment(2) } className="btn btn-primary">+1</button>
            <button onClick={ reset } className="btn btn-primary">Reset</button>
            <button onClick={ ( event ) => decrement(2) } className="btn btn-primary">-1</button>
        </>
    )
}
