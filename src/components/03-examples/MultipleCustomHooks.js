import React from 'react';

import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import '../01-useState/counter.css';

export const MultipleCustomHooks = () => {

    const { state, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const { author, quote } = !!data && data[0];

    console.log(state);

    return (
        <>
            <h1>Breaking bad quotes</h1>
            <hr />

            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-end">
                            <p className="mb-0">
                                { quote }
                            </p>
                            <footer className="blockquote-footer">
                                { author }
                            </footer>
                        </blockquote>
                    )
            }

            <button onClick={ (event) => increment(1) } className="btn btn-primary" >
                Nueva frase
            </button>


        </>
    )
}
