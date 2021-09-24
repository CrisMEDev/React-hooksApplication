import React, { memo } from 'react'
import PropTypes from 'prop-types'

export const ShowIncrement = memo(({ increment }) => {
    
    console.log('Me volvi a generar :(');
    
    return (
        <button
            onClick={ () => {
                increment( 5 );
            }}
            className="btn btn-primary">
            Incrementar
        </button >
    )
})

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired
}
