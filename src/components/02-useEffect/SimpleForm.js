import React, { useEffect, useState } from 'react';

import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState
    
    useEffect( () => {
        console.log('Hey!');
    }, []); // Se usa el segundo argumento para evitara que se ejecute el efecto cada vez
            // que algo cambie en el form

    useEffect( () => {
        console.log('formState cambió');
    }, [formState]);    // Este use effect esta al pendiente de cada vez que el formState cambie

    useEffect( () => {
        console.log('email cambió');
    }, [email]);    // Este use effect esta al pendiente de cada vez que el email cambie

    const handleInputChange = ( { target } ) => {   // Se extrae el target del event

        // console.log(event.target.name);
        // console.log(event.target.value);
        setFormState({
            ...formState,
            [ target.name ]: target.value   // Se establece el name del input con el valor que se escribe
                                            // en el input requerido
        });

    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={ handleInputChange }
                />
            </div>

        </>
    )
}


