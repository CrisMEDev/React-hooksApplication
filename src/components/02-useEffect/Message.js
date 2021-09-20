import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});

    const { x, y } = coords;

    useEffect(() => {
        
        const mouseMove = (event) => {
            const coors = { x: event.x, y: event.y };
            console.log(coors);

            setCoords({ x: coors.x, y: coors.y });

            console.log(' :D ');
        }
        
        window.addEventListener( 'mousemove', mouseMove );
        
        return () => {
            
            // Se elimina la refencia de mouseMove del eventListener mousemove
            // para evitar un consumo de memoria innecesario
            window.removeEventListener( 'mousemove', mouseMove );

        }
    }, []);

    return (
        <>
            <h3>Eres genial</h3>
            <h4> x:{x}, y:{y}</h4>
        </>
    );
}
