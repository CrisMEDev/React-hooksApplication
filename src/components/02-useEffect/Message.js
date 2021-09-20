import React, { useEffect } from 'react';

export const Message = () => {

    useEffect(() => {
        
        // Muestra mensaje la primera vez que se renderiza el componente
        console.log('componente montado');
        
        return () => {
            // Cuando ya no se necesita el componente con el useEffect, se hace una limpieza
            // con esta funcion de retorno (cleanUp)
            console.log('componente desmontado');
        }
    }, []);

    return (
        <>
            <h3>Eres genial</h3>
        </>
    );
}
