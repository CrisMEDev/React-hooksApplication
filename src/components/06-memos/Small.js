import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const Small = memo(({ value }) => {

    // Con memo se evita volver a renderizar el componente ya que
    // se 'memoriza' para saber si algun valor cambio o no
    // y SOLO se dispara si las properties cambian
    console.log('Me volví a llamar :(');

    return (
        <small>{ value }</small>
    );
})

Small.propTypes = {
    value: PropTypes.number.isRequired
}
