import React, { useState } from 'react';

import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import '../01-useState/counter.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            {
                show && <MultipleCustomHooks />
            }

            <button
                className="btn btn-primary"
                onClick={() => {
                    setShow( !show );
                }}
            >
                show/hide
            </button>
            

        </div>
    )
}
